const userModel = require("../../models/usermodel.js");

const logoutUser = async (req, res) => {
  try{

     let { email } = req.body;
  email.trim();

  const logout = await userModel.updateOne(
    {
      email: email,
    },
    {
      $set: {
        isLoggedIn: false,
      },
    },
  );

    return res.status(200).json({
        message:'the user is loggedout ',
       success:true
    })
  }
  catch(error){

    res.status(500).json({
        message:'internal server error',
        success:false
    })


  }
};

module.exports = logoutUser ;