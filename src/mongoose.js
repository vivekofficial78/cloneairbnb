const mongoose = require("mongoose");
const connectDb = async()=>{
    try
    {
        mongoose.connect("mongodb+srv://air_bnb:air123@cluster0.s2cjolk.mongodb.net/")
        console.log("connected")
    }
    catch(error)
    {
        console.log("Error")
    }
}
module.exports = connectDb;