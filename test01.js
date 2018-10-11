// First run
console.log('First try');
var testModule = require('./returnFunction')();
console.log(testModule);
var testModule2 = require('./returnFunction')();
console.log(testModule2);

// Result
// ---------------
// Module called!
// test
// Module called!
// test
// ---------------

// Second run
console.log('\nSecond try');
var testModule = require('./returnValue');
console.log(testModule);
var testModule2 = require('./returnValue');
console.log(testModule2);

// Result
// ---------------
// Module called!
// test
// test
// ---------------