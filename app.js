/*function sayHello(MyName) {
    console.log('Hello' +   ' '   + MyName);
}

sayHello('Ali Tariq');
"""
*/

var log = require('./logger.js');

const logger2 = require('./logger.js');

//console.log(logger);

//logger.log('Hello');
//logger2.log('second object of logger');

log('Function exported only')


const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

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







