const mongoose = require('mongoose')

const connect = ()=>{

    return mongoose.connect("mongodb+srv://vikas57:vikas57@cluster0.hcot0.mongodb.net/flipkart-clone")
}

module.exports=connect

