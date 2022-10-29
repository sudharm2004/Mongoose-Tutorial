const express=require('express');
const app=express();
require('./dbconnect');
const products=require('./products');

app.use(express.json())



app.get('/search/:key',async(req,res)=>{
    let result=await products.find(
        {
            "$or":[
                {name:{$regex:req.params.key}}
            ]
        }
    )

    res.send(result)
})

app.listen(5000);
