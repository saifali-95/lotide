const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail[1, 2, 3]), [2, 3];
  });


it("returns ['Yo Yo', 'Lighthouse', 'Labs'] for ['Lighthouse', 'Labs']", () => {
  assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]); 
});

});
