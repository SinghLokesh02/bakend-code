const path = require('path');

// Get your file name
console.log(path.basename(__filename));

// Get the directory name
console.log(path.dirname(__filename));

// Combine paths
console.log(path.join(__dirname, 'test', 'hello.html'));

// Get the file extension
console.log(path.extname("Lokesh"));



