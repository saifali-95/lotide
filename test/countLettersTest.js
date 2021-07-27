const countLettersTest = require('../countLetters');
const countLetters = countLettersTest.countLetters;
const updatedText = countLettersTest.updatedText;
const assert = require('chai').assert;

//TEST CASES:

describe("#countLettersTest", () => {
  it("returns true)", () => {
    assert.deepEqual(countLetters(updatedText('lHL')), { L: 2, H: 1 });
  });
});
