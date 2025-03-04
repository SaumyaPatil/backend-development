// const Emitter = require("./emitter.js"); //This is custom module events

const Emitter = require("events");    //This is core nodejs module events
const events = require("./config.js");   

const emitr = new Emitter();

emitr.on(events.GREET, function(){
    console.log("Hello");
})

emitr.on(events.GREET, function(){
    console.log("Greet occured");
})

emitr.on(events.MYAGE, function(){
    console.log("I am 21 years old.");
})

emitr.emit("greet");
