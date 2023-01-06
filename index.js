const express= require('express');

const app=express();

const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello World "+Math.random());
})

app.post('/create',(req,res)=>{
    console.log("user aaya");
    res.send("User created");
})

app.listen(port,()=>{
    console.log("Server Running on port "+port);
})