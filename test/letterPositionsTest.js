const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letter Positions", () => {
  it("returns [1] for finding e in hello", () => {
    const input = "hello";
    const expectedOutput = [ 1 ];
    assert(letterPositions(input), expectedOutput);
  });
  it("returns [2] for finding j in rajin", () => {
    const input = "rajin";
    const expectedOutput = [2];
    assert(letterPositions(input), expectedOutput);
  });
  it("returns [2,3] for finding l in hello", () => {
    const input = "hello";
    const expectedOutput = [ 2,3 ];
    assert(letterPositions(input), expectedOutput);
  });
});