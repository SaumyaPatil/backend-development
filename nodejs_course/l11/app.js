// const express = require("express");

import express from "express";

//require and module.exports - can be used in commonjs and if you use module then you can use import export
//by default the type is commonjs 
import dotenv from "dotenv";
dotenv.config();
const app = express();    //brings functionaity in apps

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`);
});

//dotenv - database URL, API key, port number, etc. you wanna keep hidden/secret

//.env file shouldnt be pushed cause if we put it on production, it should be hidden
//node modules is large so cant be pushed on github so we put it in .gitignore file
