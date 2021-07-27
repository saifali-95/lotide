const assertEqual = require('./assertEqual');

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

module.exports = countOnly;