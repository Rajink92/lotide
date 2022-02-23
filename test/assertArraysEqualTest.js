const assert = require('chai').assert;

const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

describe("#assertArraysEqual", () => {
  
  it("returns true", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true))
  });
  it("returns false", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false))
  });
});

