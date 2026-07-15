const userModel = require("../../models/usermodel.js");

const userProfile = async (req, res) => {
  try {
    const { email } = req.user;

    if (!email) {
      return res.status(400).json({
        message: "email is required for user-profile",
        success: false, // validate the email
      });
    }

    const user = await userModel.findOne({ email });

    return res.status(200).json({
      message: "here is user profile",
      success: true,
      userProfile: {
        name: user.userName,
        email: user.email,
        role: user.role,
        age:user.age
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      succes: false,
      error: error.stack, // testing for view the error
    });
  }
};

module.exports = userProfile;
