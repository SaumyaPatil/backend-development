//http request
//http is nodejs core module used to create server 
const http = require("http");

const server = http.createServer((req, res)=>{
    //We have to set headers - status code, content to be delivered, etc.
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //What we have to send to the client
    res.end("Hello I am coming from web server.");
});

//On what port is it listening - Who defines port number?
server.listen(8000, ()=>{
    console.log("Server listen at port 8000");
})

//We have to define multiple port numbers as there are multiple servers - toh ek microservice architecture me kaise hota hai? 
//Like haam eki port pe nahi sunte kya? lekin respose toh eki port pe aata hai na?
