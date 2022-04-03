const mongoose = require('mongoose');

const Card = mongoose.model("card",{})
const Blog=mongoose.model("blog",{})
const Life=mongoose.model("life",{})

module.exports={
    Card,
    Blog,
    Life

}
