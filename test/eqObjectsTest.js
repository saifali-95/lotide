const assertEqual = require('../assertEqual');
const eqArrays =require('../eqArrays');
const eqObjects=require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjectsTest", () => {
  it("returns true)", () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] },{ c: "1", d: ["2", 3] }), true);
  });


  it("returns false", () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3, 4] },{ d: ["2", 3], c: "1" }), false);
  });

});

