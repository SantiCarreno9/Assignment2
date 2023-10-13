const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    semester:{
        type:Number
    },
    yearOfGraduation:{
        type:Number
    },
    currentSubjects:[String],
    grades:[String]
});

module.exports = mongoose.model('Student',Student);
