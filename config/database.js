
const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = ()=>{
    
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("DB ka Connection is Successful")
    })
    .catch((error)=>{
        console.log("Isssue in DB Connection");
        console.log(error.message);
        process.exit(1); //terminates the process
    }); 
}

module.exports = dbConnect;