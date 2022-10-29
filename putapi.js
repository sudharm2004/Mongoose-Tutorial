const express=require('express');
const app=express();
require('./dbconnect');
const products=require('./products');

app.use(express.json())



app.delete('/update/:name',async(req,res)=>{
    let result=await products.updateMany(
        req.params,
        {
            $set:req.body
        }
    )
    console.log(result);
    res.send(result)
})

app.listen(5000);
