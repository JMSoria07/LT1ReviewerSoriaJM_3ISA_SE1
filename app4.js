const http = require('http')

const fs = require('fs')

let info = fs.readFileSync("./info.txt","utf-8") 

http.createServer((req,res)=>{
    res.end(info)
}).listen(5000)