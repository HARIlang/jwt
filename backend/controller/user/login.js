const userModel = require("../../models/usermodel");
const bcrypt = require("bcrypt");

const jwt  = require('jsonwebtoken');
const { json } = require("node:stream/consumers");

const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // Validate request
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    email = email.trim();
    password = password.trim();

    const user = await userModel.findOne({email}).select("+password")

     if(!user){

       return res.status(402).json({
        message:"the user is no exist , first signin to login",
        success:false
        // validation for non signup users
       });
      }


      if(user.isLoggedIn === true){

         return res.status(400).json({
 
            message:'the user is already logged in',
            success:false
            // validate if the user is already logged in
         })
    


      }

      const validatePassowrd  = await bcrypt.compare(password,user.password);

      if(!validatePassowrd){
        return res.status(402).json({
          message:"incorrect password",
          success:false
        })

      }

      const userLogin = await userModel.findByIdAndUpdate(user._id,
        
        {
       
          isLoggedIn:true
        },
        {
          new:true,
          
        }
      
      );

      const token = jwt.sign({
        id:user._id,
        email:user.email   // gentrate the token
      },
      process.env.JWT_key)

    return res.status(200).json({
      message:`welcome  ${user.userName }`,
      success:true,
      token,
      user:{
        userName:user.userName,
        email:user.email
      }
    })
   
   

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.stack,
    });
  }
};
 
module.exports = login;