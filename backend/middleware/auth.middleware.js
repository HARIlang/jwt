const jwt = require('jsonwebtoken');
const { decode } = require('node:punycode');
const { json } = require('node:stream/consumers');

const authenticateUser = (req,res,next) =>{
try{

    
  const decoded = jwt.verify(
    token,
    process.env.JWT_key
) ;

req.user = decode;

next()


}
catch(error){
    res.status(401).json({
        success:false,
        message:'invalid token',
        error:error.stack
    });
}
}

module.exports = authenticateUser