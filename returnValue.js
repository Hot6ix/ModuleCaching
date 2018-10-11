var testValue;

var testFunction = () => {
    console.log('Module called!');
    testValue = 'test';
    return testValue;
}

// Return result of testFunction : test
module.exports = testFunction();