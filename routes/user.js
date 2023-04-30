const express = require('express');
const router =express.Router();


const data ={
    title:"Popüler Kurslar",
    categories:["Web Geliştirme","Programlama","Veri Analizi","Mobil Uygulamalar","Ofis Uygulamaları"],
    blogs:[
        {
            blogid:1,
            baslik:"Komple Uygulamalı Web Geliştirme",
            aciklama:"Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
            resim:"1.jpeg",
            anasayfa:true
        },
        {blogid:2,
            baslik:"Komple Uygulamalı Web Geliştirme",
            aciklama:"Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
            resim:"2.jpeg",
            anasayfa:false},
        {blogid:3,
            baslik:"Komple Uygulamalı Web Geliştirme",
            aciklama:"Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
            resim:"3.jpeg",
            anasayfa:true},
        {blogid:4,
            baslik:"Komple Uygulamalı Web Geliştirme",
            aciklama:"Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
            resim:"4.jpeg",
            anasayfa:false}
    ]
}

router.use("/blogs/:blogid",(req,res,next)=>{
    
    res.render('../views/users/blog-details')
    
});

router.use("/blogs",(req,res,next)=>{
    res.render('../views/users/blogs',data)
    
});



router.use("/",(req,res,next)=>{
    res.render('../views/users/index',data)
    
});

module.exports=router;