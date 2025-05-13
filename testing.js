// Import built-in modules
const fs = require('fs');
const os = require('os');
const path = require('path');

// Print a welcome message
console.log("✅ Node.js is running correctly inside VS Code!");

// Display Node.js version
console.log(`Node.js version: ${process.version}`);

// Print current working directory
console.log(`Current directory: ${process.cwd()}`);

// Write to a temporary file
const filePath = path.join(__dirname, 'test-output.txt');
fs.writeFileSync(filePath, 'VS Code and Node.js are working!');

console.log(`📝 File written successfully to: ${filePath}`);

// Read the file and print its content
const content = fs.readFileSync(filePath, 'utf8');
console.log(`📄 File content: ${content}`);

// Show system info
console.log(`🖥️ OS Platform: ${os.platform()} (${os.type()})`);
console.log(`🧠 Free Memory: ${(os.freemem() / (1024 * 1024)).toFixed(2)} MB`);
