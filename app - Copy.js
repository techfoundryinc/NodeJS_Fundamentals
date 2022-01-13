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