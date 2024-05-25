const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainerRegisterCreate = new Schema({
    trainerFirstName:{
        type:String,
        required:true
    },
    trainerLastName:{
        type:String,
        required:true
    },
    trainerAge:{
        type:String,
        required:true
    },
    trainerMobile:{
        type:String,
        require:true
    },
    trainerEmail:{
        type:String,
        required:true
    },
    trainerPassword:{
        type:String,
        required:true,        
    },
});

module.exports=mongoose.model("trainerRegister",trainerRegisterCreate);
