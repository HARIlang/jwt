const jwt = require('jsonwebtoken');
const { decode } = require('node:punycode');
const { json } = require('node:stream/consumers');

const authenticateUser = (req,res,next) =>{
    try{

        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
    
         const decoded_token = jwt.verify(token,process.env.JWT_KEY);

        console.log(decoded_token);

        req.user = decoded_token;
        
       next();
    }
    catch(error){

       res.status(401).json({
         error:error.message,
        message:"invalid token",
        success:false
       })
    }
}

module.exports = authenticateUser