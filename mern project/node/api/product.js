var express = require('express');
var router = express.Router(); // Only for Sub module
const { MongoClient, ObjectId } = require('mongodb'); 


const ex = "product-review"
// url of the database
const url = 'mongodb+srv://Santhosh:Santhosh2803@cluster1.wztwm.mongodb.net/';
const client = new MongoClient(url);

// for add review
router.post("/createproduct",async(req,res)=>{
    let {product_name,price,description} = req.body;
    let data = {
        "product_name" : product_name,
        "price" : price,
        "description" : description
    }
    //for files uploading
    let path = __dirname+"/uploads/"+req.files.img.name;
    req.files.img.mv(path,(err)=>{

    });
    await client.connect();
    let db = client.db(ex);
    await db.collection('product').insertOne(data);
    res.status(200).json({"message":"product created"})
})

router.get("/getallproduct",async(req,res)=>{
    await client.connect();
    let db = client.db(ex);
    let list = await db.collection('product').find().skip(2).limit(2).sort({"price":1}).toArray(); // Ascending sort na +1 , descending -1
    res.status(200).json(list)
})


// Exporting similar like React
module.exports = router;