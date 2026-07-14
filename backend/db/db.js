const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const dbConnection = async() =>{
     const url=process.env.MONGODB_URI
     

    try{
       

       const dbConnect = await mongoose.connect(url);

 
       console.log('the database is connected')



    }

    catch(error){
    
        console.log('database connection is failed' );

        console.error(error.message);

        process.exit(1);

        
    }



}

module.exports = dbConnection;