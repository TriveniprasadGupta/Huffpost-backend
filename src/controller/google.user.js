const express = require('express')

const router = express.Router()

const User=require("../models/google.user.model")

router.post("",async(req,res)=>{


    try{
        const user= await User.create(req.body)

        console.log("vikas")

        res.send(user)

    }
    catch(er){
        console.log(er.message)
    }

    

})

module.exports =router