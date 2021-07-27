const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');
const assert = require('chai').assert;


describe("#letterPositionsTest", () => {
  it("returns [2, 3] for ['hello]", () => {
    assert.deepEqual(letterPositions("hello").l, [2,3]);
  });
});
