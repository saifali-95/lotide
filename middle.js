const assertArraysEqual = require ('./assertArraysEqual');
const eqArrays = require ('./eqArrays');

// Even Function 

function isEven(n) {
  return n % 2 == 0;
}

// ODD function 
function isOdd(n) {
  return Math.abs(n % 2) == 1;
}

//FUNCTION TO FIND THE MIDDLE ELEMENTS OF AN ARRAY.

const middle = function (inputArray){
  if (inputArray.length <= 2){
    return [];
  }
  if (isEven(inputArray.length)) {
    return [inputArray[(inputArray.length/2)-1],inputArray[inputArray.length/2]];
  }
  if (isOdd(inputArray.length)){
    return [inputArray[(inputArray.length-1)/2]];
  }
}


module.exports = middle;

