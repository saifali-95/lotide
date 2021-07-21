//PRINT PASSED OR FAILED IF TWO INPUT ARRAYS ARE SAME OR DIFFERENT RESPECTIVELY.
const assertArraysEqual = function (array1, array2){
  if (eqArrays(array1,array2)){
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}

//OUTPUT FALSE OR TRUE BY COMPARING TWO INPUT ARRAYS

const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//FUNCTION TO FIND THE MIDDLE ELEMENTS OF AN ARRAY.

const middle = function (inputArray){
  if (inputArray.length <= 2){
    return [];
  }
  if (Number.isInteger(inputArray.length/2)) {
    return [inputArray[(inputArray.length/2)-1],inputArray[inputArray.length/2]];
  }
  if (!Number.isInteger(inputArray.length/2)){
    return [inputArray[(inputArray.length-1)/2]];
  }
}

//TEST CASES:

// FOR ARRAYS LENGTH LESS THAN 2
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []


// FOR EVEN ARRAYS
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

// FOR ODD ARRAYS
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

// TEST CASE TO FIND IF THE RETURNED ARRAY HAS NOT MODIFIED THE ORIGINAL/ACTUAL ARRAY
let inputArray=  [1,2,4,6,7,9];
assertArraysEqual(inputArray, middle(inputArray));
