const mongoose = require('mongoose');

const Card = mongoose.model("card",{})
const Blog=mongoose.model("blog",{})

module.exports={
    Card,
    Blog

}
