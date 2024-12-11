const express= require("express");
const app = express();
const path = require("path");

app.get("/",(req,res)=>
{
    res.sendFile(path.join(__dirname, "static", "portfolio3.html"));
    // Serve static files from the "public" directory
    // app.use(express.static(path.join(__dirname, "public")));
})

app.listen(3000,()=>{console.log('runnning');})













// const myhttp =require('http');
// const server= myhttp.createServer( (req,res) =>{
// if(req.method=='GET' && req.url =='/yug'){
// res.writeHead(200,{'content-type': 'text/plan'})
// res.end("hello everyone");
// }
// else {
//     res.writeHead(400,{'content-type': 'text/plan'});
// res.end("Not found");

// }
// } );
    
// server.listen(3000,()=>{
//     console.log("running on 3000");
// })