//OUTPUT FALSE OR TRUE BY COMPARING TWO INPUT ARRAYS
const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


//PRINT PASSED OR FAILED IF TWO INPUT ARRAYS ARE SAME OR DIFFERENT RESPECTIVELY.
const assertArraysEqual = function (array1, array2){
  if (eqArrays(array1,array2)){
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
}

//TEST CASE:

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['1', '2', '3'], [1, 2, 3]);