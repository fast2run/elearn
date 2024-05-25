const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
    courseName:{
        type:String,
        required:true
    },
    courseStartDate:{
        type:Date,
    },
    courseEndDate:{
        type:Date,        
    },
    courseFees:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("CouseDetails",course);