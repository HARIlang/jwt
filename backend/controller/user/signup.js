const { fail } = require("node:assert");
const userModel = require("../../models/usermodel.js");

const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  function validatePass(password) {
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    return regex.test(password);
  }

  try {
    let { userName, email, password , age , role } = req.body;

    


    if (!email || !userName || !password ||!age ||!role) {
      return res.status(400).json({
        message: "all fields should be filled for signup",
        success: false,
        // filed validation
      });
    }

    
    userName = userName.trim();
    email = email.trim();
    password = password.trim();
    role = role.trim();
    age = age.trim();

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: `the user is already exist in the email ${existingUser.email}`,
        success: false,
        // if the user alrady exist in same email
      });
    }

    if (!validatePass(password)) {
      return res.status(400).json({
        message: "the password is weak",
        success: false,
        // validate the regex
      });
    }

  const saltRounds = 10 ;
  const hashedPasswword = await bcrypt.hash(password,saltRounds);
  
  const user = await userModel.create({
    userName,
    email,
    password:hashedPasswword,
    age,
    role
  });

   return res.status(201).json({

    message:`new created ${user.userName}`,
    success:true,
    data:user
   })

  } catch (error) {
    res.status(500).json({
      message: "internal server error in user signup",
      error: error.stack,
      success: false,
    });
  } // handling the error
};


module.exports = signUp