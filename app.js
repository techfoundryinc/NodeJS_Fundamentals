/*function sayHello(MyName) {
    console.log('Hello' +   ' '   + MyName);
}

sayHello('Ali Tariq');
"""
*/

//var log = require('./logger.js');

//const logger2 = require('./logger.js');

//console.log(logger);

//logger.log('Hello');
//logger2.log('second object of logger');

//log('Function exported only')


//const path = require('path');

//var pathObj = path.parse(__filename);

//console.log(pathObj);

const os = require('os');

var  totalMemory =  os.totalmem();
var freeMemory = os.freemem();

console.log ('Total Memory: ' + totalMemory);
console.log ('Free Memory: ' + freeMemory);

//Template String 
//ES6 / ES2015 : ECMAScript 6 defines what features arqe available in JS

// $ for adding dynamically
console.log (`Total Memory printed Dynamically: ${totalMemory}`);
console.log (`Free Memory printed Dynamically: ${freeMemory}`);


const EventEmitter = require('events');
//const emitter = new EventEmitter();

//Listener is a function which is called when that event is raised we have to register it
//Register an event

/*
emitter.on('messageLogged', function(arg){
    console.log('Listener called', arg);
});

*/

//OR





// Raise an event pass arguement event name of the event
//emitter.emit('messageLogged');

//passing arguements in case of generating event
//emitter.emit('messageLogged', { id: 1, url: 'http://'});

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', function(arg){
    console.log('Listener called', arg);
});

logger.log('message');
//Logger('message');








