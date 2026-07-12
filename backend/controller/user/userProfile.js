const userModel = require("../../models/usermodel.js");

const userProfile = async (req, res) => {
  try {
    let email  = req.params.email;

    if (!email) {
      return res.status(400).json({
        message: "email is required for user-profile",
        success: false, // validate the email
      });
    }

    const userProfile = await userModel.findOne({ email });

    if (!userProfile.isLoggedIn) {
      return res.status(402).json({
        message: "the user must be logged in for view the user profile",
        success: false, // validate if the user is not logged in
      });
    }

    return res.status(200).json({
      message: "here is user profile",
      success: true,
      data: userProfile,
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
