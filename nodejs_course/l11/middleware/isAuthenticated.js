export const isAuthenticated = (req, res, next) =>{
    console.log("Middleware is called");
    next(); //Untill you dont call next function the lines below wont execute. Here the middleware has caught the data coming from client.
}

