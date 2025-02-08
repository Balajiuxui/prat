console.log('hi krishna')

import express from "express";
const app=express();
const port=3000;


app.get("/",(req,res)=>
{
    // console.log(req);
    res.send("<h1>hello world<h2>");
});

app.post("/about",(req,res)=>
{
res.sendStatus(201);
res.send("hello bala")
})

app.get("/about",(req,res)=>
    {
    // res.sendStatus(201);
    res.send("hello bala")
    })
app.listen(port,()=>
{
    console.log(`hi ${port}`)
});