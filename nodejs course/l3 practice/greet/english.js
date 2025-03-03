const greetings = require("./greetings.json");

function greet(){
    console.log(greetings.english);
}
greet();
module.exports = {greet};
