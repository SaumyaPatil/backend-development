//Express.js me shortcut me server create ho jaata hai! API banaane me help kr deta hai!

//While creating application using nodejs and express.js, we need a file to manage the application - package.json
//Express is an npm package 
//It holds information about our app - what packages we are using, version of our application, how to start our application, etc.

//Packages are piece of codes that are inbuilt and we as developers can use them.

//While creating code for backend, we need to write package.json file as we use so many modules and packages while creating backend application
//We need to manage it all well!

//How to create package.json
//Using command npm init - When you install node, you automatically get npm also.

//The command means that we will initialise the packages that are there.
//When we do so, we are asked to enter the details that need to be provided to the file
//Otherwise, we can simply use command : npm init -y :- It will by default take versions and we need not enter manually

//Express is faster compared to nodejs. Iska kaam hota hai REST API build karna. Its a web framework for nodejs.
//If we want to use express in our nodejs application use command - npm i express

//We keep our packages to manage inside dependancies
//devdependancy - works in development mode : It works on our local, we dont deploy it but use it in our local itself
//dependancy - production mode - when you deploy, you get a domain name - google.com or so.

//The packages that we require in production, we write it in dependancy while those required for development are written in development mode

//We need express in production also as we build APIs in express and these should work in production as well right?

const express = require("express");

//1st step to create a web server
const app = express();        //While its called, the apis of express comes in app

//If I want to send some data on home route from backend
app.get("/home", (req, res)=>{
    // res.send("<h1>Hello I am coming from express!</h1>");   
    //Whatever you send is internally assumed by express what kind of data it is : Whether its plain text or its html
    res.send("<h1>Home</h1>");
})

app.get("/api/v1/user/profile", (req, res)=>{
    res.status(200).json({
        success: true,
        user:{
            username: "patil@123",
            email: "saupatil10dec@gmail.com",
            address: "Mumbai"
        }
    });
})

//We say it as dynamic api in frontend but in backend we say that its api and productId is a variable and we can get it 
app.get("/api/v1/product/:productId/comment/:commentId", (req, res)=>{
    // const id = req.params.productId;      //We get the variable productId using this line
    // const commentId = req.params.commentId;
    
    const {productId, commentId} = req.params;  //destructuring - as req.params is an object
    console.log(productId, commentId);
    
    const product = {
        id: 1,
        name: "Macbook M1 Pro",
    };

    res.status(200).json({
        success: true,
        product,
    })
})

//Server is listening at port 8000
app.listen(8000, ()=>{
    console.log("Server listen at port 8000");
});

//Nodemon automatically listens when theres any change in the file so you need not everytime start node server.
//We need nodemon for development and not deployment cause vercel or any platform we use for deployment will handle changes on own.

//npm i --save-dev nodemon : saves nodemon under dev dependancies
