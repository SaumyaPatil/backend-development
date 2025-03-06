// const express = require("express");

import express from "express";

//require and module.exports - can be used in commonjs and if you use module then you can use import export
//by default the type is commonjs 
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
const app = express();    //brings functionaity in apps

const PORT = process.env.PORT || 3000;

app.use(express.json());
//It is used to parse data - its a middleware
app.use(bodyParser.urlencoded({extended:true}))  //urlencoded makes sure that the data coming from backend should be readable

app.post("/api/v1/user/register", (req, res)=>{
    const obj = req.body;
    console.log(obj);

    res.status(200).json({
        success: true,
        message:"Account created successfully!"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`);
});

//dotenv - database URL, API key, port number, etc. you wanna keep hidden/secret

//.env file shouldnt be pushed cause if we put it on production, it should be hidden
//node modules is large so cant be pushed on github so we put it in .gitignore file
//It contains packages used in our project. It can be deleted and regenerated. So we cannot put it on production.

