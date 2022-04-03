const express = require('express')

const router = express.Router()

const {Blog, Card}=require("../models/Datamodel")

router.get("/blog", async(req, res)=>{
    try{
        const item = await Blog.find().lean().exec();

        res.send(item)
    }
    catch(er){
        res.send(er.message)
    }
})

router.get("/card", async(req, res)=>{
    try{
        const item = await Card.find().lean().exec();

        res.send(item)
    }
    catch(er){
        res.send(er.message)
    }
})

module.exports =router