function greetings(a, b){
    console.log("Hii, how are you!!", a+b);
}

function sub(a, b){
    return a>b ? a-b : b-a;
}

// greetings(); //We can either call it here or export it and use it in other file as follows

// module.exports = greetings; //If you do not assign anything to module.exports, it returns an empty object 

module.exports = {
    greetings,
    sub 
};

//This by default returns an object and we can recieve it using require in app.js
