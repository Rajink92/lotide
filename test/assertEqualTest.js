const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns true", () => {
    assert.strictEqual(assertEqual(([1, 2, 3], [1, 2, 3]), true))
  });
  it("returns false", () => {
    assert.strictEqual(assertEqual(([1, 2, 3], [3, 2, 1]), false))
  });
});
assertEqual(([1, 2, 3], [1, 2, 3]), true)  // => true
assertEqual(([1, 2, 3], [3, 2, 1]), false)


module.exports = assertEqual;