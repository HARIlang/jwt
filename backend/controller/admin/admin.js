const userModel = require('../../models/usermodel.js')

const adminProfile = async(req,res) =>{
   
    try{
         
       const user = req.user

       if(!user){
        return res.status(402).json({
            message:' the token is not valid from the admin',
            success:false
        })
       }

       const users = await userModel.find();

       const filtered_users = users.filter(user => user.role !="admin")   // send the user only as the response
       
       return res.status(200).json({
        message:'users are listed here',
        filtered_users
       })

    }
    catch(error){

        res.status(500).json({
            message:'internal server error',
            success:false,
            error:error.stack
        })
    }




}

module.exports = adminProfile