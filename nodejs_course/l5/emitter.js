function Emitter(){
    this.events = {}    //JS concept
}

//proto and prototype - JS concept
//Why did he defined this prototype when we can return from the function and use it?
//on is used to add callbacks

//You need not write this since you have core module that handles events - its just to make you understand how things work under-the-hood
Emitter.prototype.on = function(type, eventListner){
    this.events[type] = this.events[type] || [];
    this.events[type].push(eventListner);
}

//emit is used to call events
Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(listner =>{
            listner();
        });
    }
}

module.exports = Emitter;
