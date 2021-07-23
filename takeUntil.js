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

//TEST CASES

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual((results1), [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual((results2), [ "I've", 'been', 'to', 'Hollywood' ]);