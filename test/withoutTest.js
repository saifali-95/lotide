const eqArrays = require('../eqArrays');
const assertArraysEqual = require ('../assertArraysEqual');
const without = require('../without');
const assert = require('chai').assert;


describe("#without", () => {
  it("returns ", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"],["hello"]), ["world", "lighthouse"]);
  });


it("returns ['ali','canada'] for ['Saif', 'ali','canada']", () => {
  assert.deepEqual(without(["Saif", "ali","canada"], ["Saif"]),["ali","canada"]); 
});

});