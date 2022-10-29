const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:String,
    prize:Number,
    available:Boolean
})

const products=mongoose.model('products',productSchema)

module.exports=products;