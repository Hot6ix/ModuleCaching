var testValue;

var testFunction = () => {
    console.log('Module called!');
    testValue = 'test';
    return testValue;
}

// Return testFunction
module.exports = testFunction;