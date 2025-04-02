const fs = require("fs");
const path = require("path");

// Detect environment and set the extension path dynamically
let extensionPath;
if (process.env.GITHUB_ACTIONS) {
    extensionPath = process.env.GITHUB_WORKSPACE
    const config = { extensionPath };

    const configPath = path.join(__dirname, "..", "test_config.json");

    fs.writeFileSync(configPath, JSON.stringify(config, null, 4));

    console.log(`✅ test_config.json generated with extensionPath: ${extensionPath}`);
} else {
    console.log("❌ Please run this script in the GitHub Actions environment.");
}