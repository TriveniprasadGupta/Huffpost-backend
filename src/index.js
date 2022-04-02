const express=require('express')
const app = express()
const connect = require('./config/db')


const port=process.env.PORT || 8000
let {register,login} = require("./controller/authcontroller");


app.use(express.json())

app.post("/register", register);
app.post("/login",login);

app.listen(port,async ()=>{

    await connect()

    console.log(`running on port ${port}`)
})