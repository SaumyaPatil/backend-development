// Its a good practice to name the main file as index.js to indicate it as the entry point of the project.
// There are so many files available in production.

// In package.json also there main is mentioned as index.js to indicate that the execution starts from there.

//To create web server / API server, we have this built-in module
const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

// init app - handler function that we pass into createServer while using node
const app = express();

// The handler function passed here is just for the route mentioned and only the request mentioned
app.get('/', (req, res) =>{
    return res.send("Hello From Home Page");
})

app.get('/about', (req, res) =>{
    return res.send("Hello From About Page" + " hey " + req.query.name + " you are " + req.query.age);
})

// const myServer = http.createServer(app);

// express internally requires http module and apply listner on its own
app.listen(8000, () => console.log("Server Started"));


// Clean code, modular, easy to handle routes
// here to handle query params you need not worry to use url module to handle them, internally its built in express


// To handle the web server we have a handler function to process the incoming requests
// req - object containing the IP address of user, etc. Client side ka jitna bhi data hai uss request related vo req object me hoga.
// response jo send krna hai vo res ke through kr sakte hai!
// const myServer = http.createServer((req, res) => {
//     // headers are information about the type of request, what the user wants to access and who's requesting
//     // console.log(req);
//     // console.log("New req recieved");

//     // When server recieves request, it will run this function
//     // You can send response using res object. You can send html (server side rendering), text, image, etc.
    
//     // res.end("Hello from server");





//     // // Lets create a log for incoming request (non blocking request)
//     // if(req.url === "/favicon.ico")return res.end();
    
//     // const log = `${Date.now()}: ${req.url} New Req Received\n`;
//     // // Here true means I want to parse query parameter strings also
//     // const myUrl = url.parse(req.url, true);
//     // // Gives an object containing path, query, search, hostname, etc.
//     // console.log(myUrl);

//     // fs.appendFile("logFile.txt", log, (err, data) => {
//     //     // You will get this response twice cause browser makes an extra call for the favicon - iske baareme worry krneki jrvt nhi hai!
//     //     // You can support multi route using this switch case.
//     //     // I just want to search for path and not complete url so my request is going on path. I have extracted the path
//     //     switch(myUrl.pathname){
//     //         case '/': res.end("Home Page!");
//     //         break

//     //         case '/about': 
//     //         const username = myUrl.query.myName;
//     //         res.end(`Hi, ${username}`);
//     //         break

//     //         case '/search':
//     //         const search = myUrl.query.search_results;
//     //         res.end(`Here are your search results for ${search}`);

//     //         default: res.end("404");
//     //     }
//     // });






//     if(req.url === "/favicon.ico")return res.end();
//     // req.method gives us the type of HTTP request
//     const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);

//     fs.appendFile("logFile.txt", log, (err, data) => {
//         switch(myUrl.pathname){
//             case '/': 
//             if(req.method === "GET") res.end("Home Page!");
//             break

//             case '/about': 
//             const username = myUrl.query.myName;
//             res.end(`Hi, ${username}`);
//             break

//             case '/search':
//             const search = myUrl.query.search_results;
//             res.end(`Here are your search results for ${search}`);

//             case '/signup':
//                 if(req.method === "GET") res.end("This is a signup form.");
//                 else if(req.method === "POST"){
//                     // DB Query

//                     // After inserting the data posted by user in DB, server will redirect the user to the respective page.
//                     res.end("Success!");
//                 }

//             default: res.end("404");
//         }
//     });
// });

// We need a port to run our server, so to listen our server, we need a port number for incoming requests.
// One server runs on one port. If you have multiple servers you cannot run them on single port.
// Agr sab sahi chl raha hai toh callback function call hoga!
myServer.listen(8000, () => console.log("Server started!"));

// You need to restart the server to see the changes that you make in your server

// Always use non blocking requests if you want to support concurrent / parallel requests
// Dont do CPU intensive work cause it will block the thread pool.





// Reasons to  introduce express, internal working of express

// Code to create server using node is very complex
// I have to write switch case to handle different routes
// To manage different requests - GET, PUT, POST, DELETE, PATCH, etc. differently handle krna pdra hai
// Query parameters require different modules, headers and json also
// Problem is that I am adding on the modules and handling everything on scratch level
// So i want such library that writes myHandler function for me.
// npm i express - You get version under dependancies in package.json
// import express firstly to use it - const express = require("express");