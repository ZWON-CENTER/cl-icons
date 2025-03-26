const fs = require("fs");
const path = require("path");
const { transform } = require("@svgr/core");

const iconsDir = path.join(__dirname, "..", "icons");
const outputDir = path.join(__dirname, "..", "src", "components");
const distDir = path.join(__dirname, "..", "dist");
const jsonOutputPath = path.join(distDir, "icon-list.json");

// Ensure the output directories exist
[outputDir, distDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Read all SVG files from the icons directory
const svgFiles = fs
  .readdirSync(iconsDir)
  .filter((file) => file.endsWith(".svg"));

// Array to store icon information
const iconList = [];

// Updated function to sanitize component names
function sanitizeComponentName(name) {
  // Remove file extension
  let sanitized = name.replace(".svg", "");

  // Split the name by non-alphanumeric characters
  let parts = sanitized.split(/[^a-zA-Z0-9]+/);

  // Capitalize each part and join them
  sanitized = parts.map(part => {
    // Capitalize the first letter of each part
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  }).join("");

  // Ensure the name starts with a letter
  if (/^[0-9]/.test(sanitized)) {
    sanitized = "_" + sanitized;
  }

  return sanitized;
}

// Convert SVG to React components and collect icon information
svgFiles.forEach((file) => {
  console.log("Processing file:", file);
  const componentName = sanitizeComponentName(file);
  console.log("Component name:", componentName);
  const svgCode = fs.readFileSync(path.join(iconsDir, file), "utf8");

  // Extract path data from SVG
  const pathMatch = svgCode.match(/<path[^>]*d="([^"]*)"[^>]*>/);
  const pathData = pathMatch ? pathMatch[1] : "";

  // Add icon information to the list
  const iconInfo = {
    name: componentName,
    originalName: path.basename(file, '.svg')
      .replace(/[^a-zA-Z0-9-]/g, '') // Remove special characters
      .toLowerCase(),
    path: pathData,
  };
  console.log("Icon info:", iconInfo);
  iconList.push(iconInfo);

transform(
  svgCode,
  {
    plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
    typescript: true,
    dimensions: false,
    icon: true,
    svgoConfig: {
      plugins: [
        {
          name: 'removeAttrs',
          params: { attrs: '(stroke|fill|width|height)' }
        }
      ]
    }
  },
  { componentName },
).then((jsCode) => {
  // React Native 지원 추가
  jsCode = `import React from "react";\nimport type { SVGProps } from "react";\nimport { IconProps } from "../types";\n\n// 플랫폼 확인 (React Native인지 웹인지)
const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';\n\n`;

  // 컴포넌트 정의를 React Native 호환되도록 수정
  jsCode += `const ${componentName} = (props: IconProps) => {\n`;
  jsCode += `  // React Native 환경에서는 react-native-svg를 사용\n`;
  jsCode += `  if (isNative) {\n`;
  jsCode += `    try {\n`;
  jsCode += `      // 동적으로 react-native-svg 불러오기\n`;
  jsCode += `      const { Svg, Path, G, Rect } = require('react-native-svg');\n`;
  jsCode += `      return (\n`;

  // SVG 코드 추출 및 변환
  const svgMatch = svgCode.match(/<svg[^>]*>(.*?)<\/svg>/s);
  const svgContent = svgMatch ? svgMatch[1].trim() : "";

  // SVG 요소 제거하고 내부 내용만 사용
  const hasFillRule = svgCode.includes('fill-rule="evenodd"') || svgCode.includes('fillRule="evenodd"');

  jsCode += `        <Svg\n`;
  jsCode += `          width={props.width || props.size || 24}\n`;
  jsCode += `          height={props.height || props.size || 24}\n`;
  jsCode += `          viewBox="0 0 14 14"\n`;
  jsCode += `          fill=${hasFillRule ? `{props.fill || props.color || "#ACB4BD"}` : `"none"`}\n`;
  jsCode += `          stroke=${!hasFillRule ? `{props.stroke || props.color || "#ACB4BD"}` : `"none"`}\n`;
  jsCode += `          strokeWidth={props.strokeWidth || 1.16667}\n`;
  jsCode += `          {...props}\n`;
  jsCode += `        >\n`;

  // SVG 내용 변환 (path 태그를 Path 컴포넌트로 변환)
  let rnContent = svgContent
    .replace(/<path([^>]*)d="([^"]*)"([^>]*)\/>/g, '          <Path d="$2" $1 $3/>')
    .replace(/<g([^>]*)>/g, '          <G $1>')
    .replace(/<\/g>/g, '          </G>')
    .replace(/<rect([^>]*)\/>/g, '          <Rect $1/>')
    .replace(/fill="([^"]*)"/g, 'fill={props.fill || props.color || "$1"}')
    .replace(/stroke="([^"]*)"/g, 'stroke={props.stroke || props.color || "$1"}')
    .replace(/stroke-width="([^"]*)"/g, 'strokeWidth={props.strokeWidth || $1}')
    .replace(/-([a-z])/g, (match, p1) => p1.toUpperCase());  // 케밥 케이스를 카멜 케이스로 변환

  jsCode += `${rnContent}\n`;
  jsCode += `        </Svg>\n`;
  jsCode += `      );\n`;
  jsCode += `    } catch (error) {\n`;
  jsCode += `      console.error("Error loading react-native-svg:", error);\n`;
  jsCode += `      return null;\n`;
  jsCode += `    }\n`;
  jsCode += `  }\n\n`;

  // 기존 웹용 React 컴포넌트
  if (hasFillRule) {
    jsCode += `  // 웹 환경용 SVG\n`;
    jsCode += `  return (\n`;
    jsCode += `    <svg\n`;
    jsCode += `      width={props.width || props.size || 24}\n`;
    jsCode += `      height={props.height || props.size || 24}\n`;
    jsCode += `      viewBox="0 0 14 14"\n`;
    jsCode += `      xmlns="http://www.w3.org/2000/svg"\n`;
    jsCode += `      {...props}\n`;
    jsCode += `    >\n`;
    jsCode += `      <g fill={props.fill || props.color || "#ACB4BD"}>\n`;

    // 웹 환경용 SVG 내용도 camelCase로 변환
    const webContent = svgContent
      .replace(/fill-rule/g, 'fillRule')
      .replace(/clip-rule/g, 'clipRule')
      .replace(/stroke-width/g, 'strokeWidth')
      .replace(/stroke-linecap/g, 'strokeLinecap')
      .replace(/stroke-linejoin/g, 'strokeLinejoin')
      .replace(/stroke-miterlimit/g, 'strokeMiterlimit')
      .replace(/stroke-dasharray/g, 'strokeDasharray')
      .replace(/stroke-opacity/g, 'strokeOpacity')
      .replace(/fill-opacity/g, 'fillOpacity')
      .replace(/-([a-z])/g, (match, p1) => p1.toUpperCase());

    jsCode += `        ${webContent}\n`;
    jsCode += `      </g>\n`;
    jsCode += `    </svg>\n`;
    jsCode += `  );\n`;
  } else {
    jsCode += `  // 웹 환경용 SVG\n`;
    jsCode += `  return (\n`;
    jsCode += `    <svg\n`;
    jsCode += `      width={props.width || props.size || 24}\n`;
    jsCode += `      height={props.height || props.size || 24}\n`;
    jsCode += `      viewBox="0 0 14 14"\n`;
    jsCode += `      stroke={props.stroke || props.color || "#ACB4BD"}\n`;
    jsCode += `      fill="none"\n`;
    jsCode += `      xmlns="http://www.w3.org/2000/svg"\n`;
    jsCode += `      {...props}\n`;
    jsCode += `    >\n`;

    // 웹 환경용 SVG 내용도 camelCase로 변환
    const webContent = svgContent
      .replace(/fill-rule/g, 'fillRule')
      .replace(/clip-rule/g, 'clipRule')
      .replace(/stroke-width/g, 'strokeWidth')
      .replace(/stroke-linecap/g, 'strokeLinecap')
      .replace(/stroke-linejoin/g, 'strokeLinejoin')
      .replace(/stroke-miterlimit/g, 'strokeMiterlimit')
      .replace(/stroke-dasharray/g, 'strokeDasharray')
      .replace(/stroke-opacity/g, 'strokeOpacity')
      .replace(/fill-opacity/g, 'fillOpacity')
      .replace(/-([a-z])/g, (match, p1) => p1.toUpperCase());

    jsCode += `      ${webContent}\n`;
    jsCode += `    </svg>\n`;
    jsCode += `  );\n`;
  }

  jsCode += `};\n\nexport default ${componentName};\n`;

  fs.writeFileSync(path.join(outputDir, `${componentName}.tsx`), jsCode);
});
});

// Generate index.ts file
const indexContent = svgFiles
  .map((file) => {
    const componentName = sanitizeComponentName(file);
    return `export { default as ${componentName} } from './components/${componentName}';`;
  })
  .join("\n");

// 타입 내보내기 추가
const indexWithTypes = `${indexContent}\n\nexport type { IconProps } from './types';`;

fs.writeFileSync(path.join(__dirname, "..", "src", "index.ts"), indexWithTypes);

// Generate JSON file with icon list in dist directory
fs.writeFileSync(jsonOutputPath, JSON.stringify({ icons: iconList }, null, 2));

console.log(
  "Icon components, index.ts, and icon-list.json generated successfully!",
);