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
  isLoggedIn:{
  
    type:Boolean,
    default:false


  },
},
{
    timeStamp:true
});

const userModel = mongoose.model('user',userSchema);

module.exports = userModel
