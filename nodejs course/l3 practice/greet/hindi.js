const greetings = require("./greetings.json");
//When we require json data, we get it as object

function greet(){
    console.log(greetings.hindi);
}
greet();

module.exports = greet;
