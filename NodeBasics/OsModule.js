const os = require('os');

// Get the current working directory
console.log(os.homedir());

// Get the total amount of free disk space in bytes in GB
console.log(os.freemem()/(1024*1024*1024));

// Get the total amount of free disk space in bytes in GB
console.log(os.totalmem()/(1024*1024*1024));

// Get the operating system type and version
console.log(os.type());

// Get the operating system platform
console.log(os.platform());

// Get the operating system release
console.log(os.release());

// Get the Architecture
console.log(os.arch());

// Get the CPU core information
console.log(os.cpus());