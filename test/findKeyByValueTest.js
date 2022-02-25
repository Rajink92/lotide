const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#find key by value", () => {
  it("returns drama for The Departed", () => {
    const bestMovieByGenre = {
      action: "Fast 5",
      comedy: "The Waterboy",
      drama:  "The Departed"
    };
    const searchKey = "The Departed";
    const expected = "drama";
    assert.equal(findKeyByValue(bestMovieByGenre, searchKey), expected);
  });
});