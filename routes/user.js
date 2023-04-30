const express = require('express');
const router =express.Router();


const data ={
    title:"Popüler Kurslar",
    categories:["Web Geliştirme","Programlama","Veri Analizi","Mobil Uygulamalar","Ofis Uygulamaları"]
}

router.use("/blogs/:blogid",(req,res,next)=>{
    
    res.render('../views/users/blog-details')
    
});

router.use("/blogs",(req,res,next)=>{
    res.render('../views/users/blogs')
    
});



router.use("/",(req,res,next)=>{
    res.render('../views/users/index',data)
    
});

module.exports=router;