const assert = require('chai').assert;
const tail = require('../head');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns Yo Yo for words", () => {
    assert.strictEqual(tail(words), "Yo Yo");
  });
  const words1 = ["Dog", "Cat", "Mouse"];
  it("returns Dog for tail(words1)", () => {
    assert.strictEqual(tail(words1), "Dog");
  });
});