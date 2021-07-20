//FUNCTION TO FIND TAIL OF AN ARRAY WITHOUT AFFECTING THE ACTUAL ARRAY:

const tail = function(array2) {
  let arrayTail = [];
  for (let i = 0; i < array2.length; i++) {
    if (i !== 0) {
      arrayTail.push(array2[i]);
    }
  }
  return arrayTail;

};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//TEST CASE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!