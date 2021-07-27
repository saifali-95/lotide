const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArraysTest", () => {
  it("returns true)", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });


  it("returns true)", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false);
  });

});