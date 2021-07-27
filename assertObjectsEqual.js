const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

// FUNCTION WILL TAKE TWO INPUT OBJECT AND WILL CONSOLE LOG AN APPROPRIATE MESSAGE.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
};

module.exports = assertObjectsEqual;