const map = require('../map');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


describe("#mapTest", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });


it("returns ['S', 'a', 'c'] for ['Saif', 'ali','canada']", () => {
  assert.deepEqual(map(["Saif", "ali","canada"], word => word[0]),['S', 'a', 'c']); 
});

});