const mongoose = require('mongoose');



const GoogleuserSchema = new mongoose.Schema({

    first_name:{type:String, required:true},
    email:{type:String,required:true},
    ImageUrl:{type:String}


},{
    versionKey:false,
    timestamps:true,
})

module.exports =mongoose.model("huffpostgoogleuser",GoogleuserSchema)