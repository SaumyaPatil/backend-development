const greetings = require("./greet/index.js");
greetings.hindi();
greetings.english();

//Otherwise, we can destructure properties of the object and use
const {hindi, english} = require("./greet.js");
hindi();
english();
