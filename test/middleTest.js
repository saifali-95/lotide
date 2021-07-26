const assertArraysEqual = require ('../assertArraysEqual');
const eqArrays = require ('../eqArrays');
const middle = require ('../middle')

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