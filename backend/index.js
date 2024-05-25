//https://www.youtube.com/watch?v=O5kh3sTVSvA
const express = require("express");
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
const connection=require('./config/DB_Connect.jsx');
const router=require('./routes/routes');
const cors = require("cors");

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","PATCH","DELETE"],
}));




//route

// app.get('/',(req,res)=>{
//  res.send("Welcome to backend world");
    
// })

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use(express.json());
app.use("/api",router);
//app.use("api/trainer",router);
//DBConnection
connection();
mongoose.connection.once("open",()=>{
    console.log("!!happy codding connect DB!!");
    app.listen(process.env.PORT,()=>{
        console.log(`your listing port is ${process.env.PORT}`);
    })
})
mongoose.connection.on("err",(err)=>{
    logError(err);
})



