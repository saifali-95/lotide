const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(assert[1, 2, 3]), [1, 2, 3];
  });


  it("returns true for ['1', '2', '3'], [1, 2, 3])", () => {
    assert.deepEqual(assert['1', '2', '3']), [1, 2, 3];
  });

});
