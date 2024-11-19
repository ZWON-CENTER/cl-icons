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

// Function to sanitize component names
function sanitizeComponentName(name) {
  // Remove file extension and non-alphanumeric characters, then capitalize
  let sanitized = name
    .replace(".svg", "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/^(\d)/, "_$1") // Prefix with underscore if it starts with a number
    .replace(/^\s+|\s+$/g, ""); // Trim whitespace

  // Capitalize the first letter
  sanitized = sanitized.charAt(0).toUpperCase() + sanitized.slice(1);

  return sanitized;
}

// Convert SVG to React components and collect icon information
svgFiles.forEach((file) => {
  const componentName = sanitizeComponentName(file);
  const svgCode = fs.readFileSync(path.join(iconsDir, file), "utf8");

  // Extract path data from SVG
  const pathMatch = svgCode.match(/<path[^>]*d="([^"]*)"[^>]*>/);
  const pathData = pathMatch ? pathMatch[1] : "";

  // Add icon information to the list
  iconList.push({
    name: componentName,
    originalName: file.replace(".svg", ""),
    path: pathData,
  });

  transform(
    svgCode,
    {
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      typescript: true,
      dimensions: false,
      icon: true,
    },
    { componentName },
  ).then((jsCode) => {
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
