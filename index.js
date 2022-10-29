require('./dbconnect')
const products=require('./products')

const saveInDb=async()=>{
    

    let data=new products({"name": "classmates",
    "prize": 95000,
    "available": true,
    "version":3.0})

    let result=await data.save();

    console.log(result);
}

const updateInDb=async()=>{
    
    // const products=mongoose.model('products',productSchema)

    let result=await products.updateMany(
        {name:'classmates'},
        {
            $set:{available:false}        
        }
        );

    console.log(result);
}

const deleteInDb=async()=>{
    
    // const products=mongoose.model('products',productSchema)

    let result=await products.deleteMany({name:'classmates'})

    console.log('delete',result);
}

const findInDb=async()=>{
    
    // const products=mongoose.model('products',productSchema)

    let result=await products.find({name:'mac'})

    console.log('data found',result);
}

// saveInDb();
// updateInDb();
// deleteInDb();
findInDb();

