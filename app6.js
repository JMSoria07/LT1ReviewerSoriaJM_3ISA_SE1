const express = require('express')

 const app = express();

 app.use(express.static(__dirname))

 app.get('/query',(req,res)=> {
    res.write("Hello " + req.query.name)
    res.end();
 })

 app.get("/param/:name",(req,res) =>{
    res.write("Hello " + req.params.name)
    res.end();
 })

 app.listen(3000,(error)=> {
    if (!error) console.log("server is running at port 3000")
 })