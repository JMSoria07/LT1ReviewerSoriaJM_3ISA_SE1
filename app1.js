
const fs = require('fs')
const http = require("http");

 let content = fs.readFile ('./info.txt','utf-8',(error,data)=>{
     if (!error)console.log(data)
     else console.log('error reading the file...')
 })


console.log('This line comes after reading the file.....')