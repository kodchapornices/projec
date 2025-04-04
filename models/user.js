const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
    },
    fname:{
        type:String,
    },
    lname:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },telnum:{
        type:String,
    },bday:{
        type:Date
    }
},{timestamps:true})


module.exports = mongoose.model('User',UserSchema)