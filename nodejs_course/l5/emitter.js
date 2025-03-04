function Emitter(){
    this.events = {}
}

Emitter.prototype.on = function(type, eventListner){
    this.events[type] = this.events[type] || [];
    this.events[type].push(eventListner);
}

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(listner =>{
            listner();
        });
    }
}
