const rateLimit = require('express-rate-limit');



const globalLimiter = rateLimit({
    windowMs: 15 * 60 *1000,  // millisecond convertion for 15 minutes
    max:100,       // max 100 req for 15 mins
     message:{
      success:false,
      message:'too many request , please try again in 15 minutes'    
    },
    standardHeaders:true,
    legacyHeaders:false 
});


module.exports =  globalLimiter
