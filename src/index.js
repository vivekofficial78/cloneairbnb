const express = require("express");
const mongoose = require("mongoose");
const app = express();
const hbs = require("hbs");
const path = require("path");
const collection = require("./model");
const connectDb = require("./mongoose");
console.log(__dirname);
const templatePath = path.join(__dirname,"../view");
console.log(templatePath);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
connectDb();
app.set("view engine","hbs");
app.set("views",templatePath);
app.get("/",(req,res)=>{
    res.render("Home.hbs");
})
app.get("/signup",(req,res)=>{
    res.render("Home.hbs");   
})
app.get("/login",(req,res)=>{
    res.render("Login.hbs");
})
app.post("/signup",async(req,res)=>{
const data = {name:req.body.name,password:req.body.password}
console.log(data);
console.log(req.body);
    const newuser = new collection(data);

    const createuser = newuser.save();
    console.log(createuser);
res.render("Home.hbs");
})
app.post("/login",async(req,res)=>{
    try
    {
        const check = await collection.findOne({name:req.body.name,password:req.body.password})
        console.log(check);
        if(check.name===req.body.name && check.password===req.body.password)
        {
            res.render("Home.hbs");
        }
        else
        {
            res.send("NO data")
        }
        // else
        // {
        // alert("no data");
        // }
    }
    catch{
        res.send("wrong data")
    }
    // res.render("Home.hbs");
})
app.listen(9000,()=>{
    console.log("done");
})