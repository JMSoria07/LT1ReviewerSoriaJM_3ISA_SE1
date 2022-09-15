const http = require('http')

const fs = require('fs')

let page1 = fs.readFileSync("./public/page1.html","utf-8") 

let page2 = fs.readFileSync("./public/page2.html","utf-8") 

let error = fs.readFileSync("./public/error.html","utf-8") 

http.createServer((req,res)=>{
if(req.url == "/page1"){
    res.end(page1)}

    else if(req.url == "/page2"){
    res.end(page2)}

    if(req.url == "/error"){
    res.end(error)}
}).listen(3000)