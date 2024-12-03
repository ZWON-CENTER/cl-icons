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
  jsCode = jsCode.replace(
    /const (\w+) = $$props: SVGProps<SVGSVGElement>$$/,
    `const $1 = (props: SVGProps<SVGSVGElement> & { color?: string; fill?: string })`
  );

  if (svgCode.includes('fill-rule="evenodd"') || svgCode.includes('fillRule="evenodd"')) {
    jsCode = jsCode.replace(
      /<svg([^>]*?)>/,
      '<svg $1>'
    );

    jsCode = jsCode.replace(
      /<g([^>]*?)>/,
      '<g $1 fill={props.fill || props.color || "#ACB4BD"}>'
    );

    jsCode = jsCode.replace(
      /<path([^>]*?)fill=["'][^"']*["']/g,
      '<path$1'
    );
  } else {
    jsCode = jsCode.replace(
      /<svg([^>]*?)>/,
      '<svg stroke={props.color || "#ACB4BD"} fill="none" $1>'
    );
  }

  // Add width and height props to the svg element with default values
  jsCode = jsCode.replace(
    /<svg/,
    '<svg width={props.width || 24} height={props.height || 24}'
  );

  // Fix clipPath rect
  jsCode = jsCode.replace(
    /<rect \/>/,
    '<rect width={14} height={14} fill="white" />'
  );

  // Ensure proper spacing in the export statement
  jsCode = jsCode.replace(/export default (\w+)/, "export default $1");
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

fs.writeFileSync(path.join(__dirname, "..", "src", "index.ts"), indexContent);

// Generate JSON file with icon list in dist directory
fs.writeFileSync(jsonOutputPath, JSON.stringify({ icons: iconList }, null, 2));

console.log(
  "Icon components, index.ts, and icon-list.json generated successfully!",
);