const express =require('express');
const app=express();

app.set("view engine","ejs");

const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '12345',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



const path = require('path');
const userRoutes=require("./routes/user")
const adminRoutes=require("./routes/admin")


app.use('/libs',express.static(path.join(__dirname,'node_modules')));
app.use('/static',express.static(path.join(__dirname,'public')));


app.use("/admin",adminRoutes);
app.use(userRoutes);








app.listen(8080,()=>{
    console.log('Port listening...');
});