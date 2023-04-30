const express = require('express');
const router =express.Router();


router.use("/blogs/:blogid",(req,res,next)=>{
    
    res.sendFile('../views/users/blog-details')
    
});

router.use("/blogs",(req,res,next)=>{
    res.sendFile('../views/users/blogs')
    
});



router.use("/",(req,res,next)=>{
    res.render('../views/users/index')
    
});

module.exports=router;