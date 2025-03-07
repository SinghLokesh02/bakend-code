const fs = require('fs');

// Create and write in a lokesh.txt file
fs.writeFileSync('lokesh.txt', 'Hello, this is a test file.');

// Read the content of the file
const data = fs.readFileSync('index.js', 'utf-8');
console.log(data);


// Append data to the file
fs.appendFileSync('lokesh.txt', '\n\n This is the appended data.');

// Rename the file
fs.renameSync('lokesh.txt', 'lokeshNew.txt');

// Delete the file
fs.unlinkSync('lokeshNew.txt');