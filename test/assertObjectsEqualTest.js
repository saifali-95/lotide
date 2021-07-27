const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');
const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');


describe("#assertObjectEqualTest", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.equal(assertObjectsEqual({ a: "1", b: "2" },{ b: "2", a: "1" }), true);
  });


it("returns ['Yo Yo', 'Lighthouse', 'Labs'] for ['Lighthouse', 'Labs']", () => {
  assert.equal(assertObjectsEqual(["Yo Yo", "Lighthouse", "Labs"],["Lighthouse", "Labs"]), false); 
});

});
