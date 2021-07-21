// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function (firstNames, itemsToCount) {
  const newObj = {};
  for (const item in itemsToCount) {
    let counter = 0;
    if (itemsToCount.hasOwnProperty(item)) {
      if (itemsToCount[item] === true) {
        for (let i = 0; i < firstNames.length; i++) {
          if (firstNames[i] === item) {
            newObj[item] = counter + 1;
            counter++;
          }
        }
      }
    }
  }
  return newObj;
}


//TEST CASES
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const itemsToCount = {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

countOnly(firstNames, itemsToCount);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);