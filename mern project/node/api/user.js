var express = require('express');
var router = express.Router(); // Only for Sub module
const { MongoClient, ObjectId } = require('mongodb'); 


const ex = "product-review"
// url of the database
const url = 'mongodb+srv://Santhosh:Santhosh2803@cluster1.wztwm.mongodb.net/';
const client = new MongoClient(url);

router.post("/register",async(req,res)=>{
    let {email,password,name,mobile} = req.body;
    let data = {
        "name" : name,
        "email" :  email,
        "password" : password,
        "mobile" : mobile,
    }
    await client.connect();
    let db = client.db(ex);
    await db.collection('user').insertOne(data);
    res.status(200).json({"message":"Registered"})
})


router.post("/login",(req,res)=>{
    let{email,password} = req.body;
    res.json({"msg":"login test"})
    // db connection details
})


router.get("/getallproduct",async(req,res)=>{
    await client.connect();
    let db = client.db(ex);
    let list = await db.collection('user').find({}).toArray();
    res.status(200).json(list)
})

// Exporting similar like React
module.exports = router;