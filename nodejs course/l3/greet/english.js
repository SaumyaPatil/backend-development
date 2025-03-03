const english = require("./greeting.json");
//When you require json data in different file, you get an object.
// console.log(english);

function greet(){
    //We can write dynamic data
    console.log(english.english);
}
// greet();
module.exports = greet;
