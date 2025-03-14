//To save data in database, we have to create a blueprint first which is called schema or model in mongoDB.
//Folder structure is followed to seperate out the services to follow MVC architecture. 

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

export const User = mongoose.model("User", userSchema);
