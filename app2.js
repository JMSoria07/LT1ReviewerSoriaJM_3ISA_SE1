// Node.js program to demonstrate the    
// readable.pipe() method
  
// Accessing fs module
const fs = require("fs");

const path = require('path');

fs.mkdir(path.join(__dirname,'data'),
{recursive:true},(err) =>{
    if(err){
        return console.error(err);
    }
    console.log("Directory created successfully")
})

// Create a readable stream
const readable = fs.createReadStream('info.txt');
 
// Create a writable stream
const writable = fs.createWriteStream('data/info2.txt');
 
// Calling pipe method
readable.pipe(writable);
 
console.log("Program Ended");

