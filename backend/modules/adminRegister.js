const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminRegisterCreate = new Schema({
    adminFirstName:{
        type:String,
        required:true
    },
    adminLastName:{
        type:String,
        required:true
    },
    adminAge:{
        type:String,
        required:true
    },
    adminMobile:{
        type:String,
        require:true
    },
    adminEmail:{
        type:String,
        required:true
    },
    adminPassword:{
        type:String,
        required:true,        
    },
});

module.exports=mongoose.model("adminRegister",adminRegisterCreate);