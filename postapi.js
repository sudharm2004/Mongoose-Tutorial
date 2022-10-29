const express=require('express');
const app=express();
require('./dbconnect');
const products=require('./products');

app.use(express.json())



app.post('/create',async(req,res)=>{
    let data=new products(req.body)
    let result=await data.save();
    console.log(result);
    console.log('req.body :>> ', req.body);
    res.send(result)
})

app.listen(5000);
