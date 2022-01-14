console.log(__filename)
console.log(__dirname)

var url  = 'http://mylogger.io/log';
const EventEmitter = require('events');
//const emitter = new EventEmitter();

class Logger extends EventEmitter {

    log(message) {
        console.log(message);

        //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
        
    
    
    }
        

}

//module.exports.log = log;
//module.exports.endPoint = url;

//module.exports = log

//export logger class
module.exports = Logger;