const assertEqual = require('../assertEqual');
const findKeyTest = require('../findKey');
const findKey = findKeyTest.findKey;
const getKeyByValue = findKeyTest.getKeyByValue;
const assert = require('chai').assert;

describe("#findKeyTest", () => {
  it("returns noma", () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), 'noma');
  });


it("returns noma", () => {
  assert.strictEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 3), "Akaleri");

});
});