//OUTPUT FALSE OR TRUE BY COMPARING TWO INPUT ARRAYS
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length){
   return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for (const item in object1){
    if ((Array.isArray(object1[item]) && Array.isArray(object2[item]))){
      if(!(eqArrays(object1[item],object2[item]))){
      return false;
      }
    }
    else if (object1[item]!==object2[item]){
      return false;
    }
  }
  return true;
};

// FUNCTION WILL TAKE TWO INPUT OBJECT AND WILL CONSOLE LOG AN APPROPRIATE MESSAGE.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else{
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CASES:

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba); // => PASSED

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab,abc); // => FAILED

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => PASSED

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => FAILED