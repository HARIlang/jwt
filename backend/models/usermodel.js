const mongoose = require("mongoose");
const { timeStamp } = require("node:console");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

  email:{
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },
  age:{
  
    type:Number,
    required:true,
    validate:{

      validator: Number.isInteger,
      message:'the age should be an whole number', // validating the age
  
  }},
  role:{
   type:String,
   requird:true

  },
  
},
{
    timeStamp:true
});

const userModel = mongoose.model('user',userSchema);

module.exports = userModel
