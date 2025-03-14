import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/database.js";
import userRouter from "./routes/user.js";

const app = express();
dotenv.config();
//Keep the connectDB function here under dotenv.config() otherwise we cannot access the environment variables like URI:

connectDB();

//middleware -> when we pass json data to backend from user
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//use() is a middleware
app.use("/api/v1/user", userRouter);

// http://localhost:8000/api/v1/user/ -> this is called route grouping

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`);
})

//Now we created a basic server, now we have to make connection to database

//We will create REST APIs to create, delete and update todos
