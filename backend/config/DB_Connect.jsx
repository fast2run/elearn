const mongoose = require("mongoose");
const CONSTR=process.env.DB_CON_STR;

const connectDB = async()=>{
 try{
    await mongoose.connect(CONSTR);
 }catch(error){
    handleError(error);
 }
}

module.exports=connectDB
