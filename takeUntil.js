const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//MAIN FUNCTION THAT WILL OUTPUT AN ARRAY AS SOON AS CALLBACK FUNCTION RETURN TRUTHY.
const takeUntil = function(array, callback) {
  // ...
  const result = [];
  for (const item of array){
    if(callback(item)){
      return result;
    }
    else{
      result.push(item);
    }
  }
  return result;

}

module.exports = takeUntil;