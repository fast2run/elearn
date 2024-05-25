const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Learner Registration Schema
const learnerRegistrationCreate = new Schema({
    learnerFirstName:{
        type:String,
        required:true
    },
    learnerLastName:{
        type:String,
        required:true
    },
    learnerAge:{
        type:String,
        required:true
    },
    learnerMobile:{
        type:String,
        require:true
    },
    learnerEmail:{
        type:String,
        required:true,
        
    },
    learnerPassword:{
        type:String,
        required:true,        
    },
});



module.exports=mongoose.model('learnerRegister',learnerRegistrationCreate)
// var learnerRegister=mongoose.model('learnerRegister',learnerRegistrationCreate)
// module.exports={learnerRegister:learnerRegister,};