var cors = require('cors');
var express = require('express');
const fileUpload = require('express-fileupload');

var app = express();
app.use(cors());

app.use(express.json());
app.use(fileUpload());
app.use('/upload',express.static('uploads'))

// Importing sub module to the main module
var user = require("./api/user");
var product = require("./api/product")
app.use("/user",user)
app.use("/product",product)



const portno = 8080
app.listen(portno,()=>{
    console.log(`Server is running on ${portno}`);
})