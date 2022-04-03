const express=require('express')
const app = express()
const connect = require('./config/db')
const cors=require("cors")

const datacontroller=require('./controller/Data.controller')

const port=process.env.PORT || 8000
let {register,login} = require("./controller/authcontroller");

const googlecontroller= require("./controller/google.user")

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}



app.use(cors(corsOptions))

app.use(express.json())

app.use("",datacontroller)

app.use("/googleuser",googlecontroller)

app.post("/register", register);

app.post("/login",login);

app.listen(port,async ()=>{

    await connect()

    console.log(`running on port ${port}`)
})