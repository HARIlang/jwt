const { fail } = require("node:assert");
const userModel = require("../../models/usermodel.js");

const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  function validatePass(password) {
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6}$/;

    return regex.test(password);
  }

  try {
    let { userName, email, password } = req.body;

    userName = userName.trim();
    email = email.trim();
    password = password.trim();

    if (!email || !userName || !password) {
      return res.status(400).json({
        message: "all fields should be filled for signup",
        success: false,
        // filed validation
      });
    }

    const user = await userModel.findOne({ email });

    if (email) {
      return res.status(409).json({
        message: `the user is already exist in the email ${user.email}`,
        success: false,
        // if the user alrady exist in same email
      });
    }

    if (!validatePass) {
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
    password:hashedPasswword
  });



  } catch (error) {
    res.status(500).json({
      message: "internal server error in user signup",
      error: error.message,
      success: false,
    });
  } // handling the error
};
