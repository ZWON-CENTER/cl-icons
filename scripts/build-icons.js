const fs = require("fs");
const path = require("path");
const { transform } = require("@svgr/core");

const iconsDir = path.join(__dirname, "..", "icons");
const outputDir = path.join(__dirname, "..", "src", "components");
const distDir = path.join(__dirname, "..", "dist");
const jsonOutputPath = path.join(distDir, "icon-list.json");

// Ensure the output directories exist
[outputDir, distDir].forEach(dir => {
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

// Convert SVG to React components and collect icon information
svgFiles.forEach((file) => {
  const componentName = file
    .replace(".svg", "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  const svgCode = fs.readFileSync(path.join(iconsDir, file), "utf8");

  // Extract path data from SVG
  const pathMatch = svgCode.match(/<path[^>]*d="([^"]*)"[^>]*>/);
  const pathData = pathMatch ? pathMatch[1] : "";

  // Add icon information to the list
  iconList.push({
    name: componentName,
    path: pathData
  });

  transform(
    svgCode,
    {
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      typescript: true,
      dimensions: false,
      icon: true,
    },
    { componentName }
  ).then((jsCode) => {
    fs.writeFileSync(path.join(outputDir, `${componentName}.tsx`), jsCode);
  });
});

// Generate index.ts file
const indexContent = svgFiles
  .map((file) => {
    const componentName = file
      .replace(".svg", "")
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");
    return `export { default as ${componentName} } from './components/${componentName}';`;
  })
  .join("\n");

fs.writeFileSync(path.join(__dirname, "..", "src", "index.ts"), indexContent);

// Generate JSON file with icon list in dist directory
fs.writeFileSync(jsonOutputPath, JSON.stringify({ icons: iconList }, null, 2));

console.log("Icon components, index.ts, and icon-list.json generated successfully!");