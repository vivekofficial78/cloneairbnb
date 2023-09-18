const mongoose = require("mongoose");
const loginschema = new mongoose.Schema({name:{type:String,required:true},
    password:{type:String,required:true}});
    const collection = new mongoose.model("collection1",loginschema);
    module.exports = collection


    const signupschema = new mongoose.Schema({name:{type:String,required:true},
        password:{type:String,required:true}, city:{type:String,required:true},
        state:{type:String,required:true}});
        const collection1 = new mongoose.model("collection1",signupschema);
        module.exports = collection1