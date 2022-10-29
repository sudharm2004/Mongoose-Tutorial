const express=require('express');
const app=express();
require('./dbconnect');
const products=require('./products');

app.use(express.json())



app.delete('/delete/:prize',async(req,res)=>{
    let result=await products.deleteMany(req.params)
    console.log(result);
    res.send('done')
})

app.listen(5000);
