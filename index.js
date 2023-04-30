const express =require('express');
const app=express();

const path = require('path');


app.use('/libs',express.static(path.join(__dirname,'node_modules')));
app.use('/static',express.static(path.join(__dirname,'public')));

app.use("/blogs/:blogid",(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'views/users','blog-details.html'))
    
});

app.use("/blogs",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views/users','blogs.html'))
    
});



app.use("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views/users','index.html'))
    
});





app.listen(8080,()=>{
    console.log('Port listening...');
});