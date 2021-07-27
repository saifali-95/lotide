const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#takeUntilTest", () => {

  it("returns I've been to hollywood", () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);
  });

  it("returns [ 1, 2, 5, 7, 2 ]",  () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });



});





