// Node.js program to demonstrate the    
// readable.pipe() method
  
// Accessing fs module
const fs = require("fs");
 
// Create a readable stream
const readable = fs.createReadStream('info.txt');
 
// Create a writable stream
const writable = fs.createWriteStream('info2.txt');
 
// Calling pipe method
readable.pipe(writable);
 
console.log("Program Ended");

