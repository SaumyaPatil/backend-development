
//Mongoose is ODM library for mongoDB. It is used to define the structure of documents in a MongoDB collection.
import mongoose from "mongoose";

//Saving a user to mongoDB, defining mongoose model to create and interact with todo collection in mongoDB
const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true //Here the field must be provided when creating a new user
    },
    discription:{
        type: String,
        required:true
    }
});

//Creating a mongoose model named "Todo" to interact with the database.
export const Todo = mongoose.model("Todo", todoSchema);

//mongoose.Schema({}) - creates schema for todo collection and defines structure of documents in the database
