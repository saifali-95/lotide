const assert = require('chai').assert;
const random = require ('../middle');
const middle = random.middle;
const isEven = random.isEven;
const isOdd = random.isOdd;

describe("#middle", () => {
it("returns [1,2,3] for [2]", () => {
    assert.deepEqual(middle[1, 2, 3]), [2];
});


it("returns [1, 2, 3, 4] for [2 ,3]", () => {
  assert.deepEqual(middle([1, 2, 3, 4]),[2 ,3]); 
});


it("returns [1, 2, 3, 4, 5, 6] for [3, 4]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); 
});


});