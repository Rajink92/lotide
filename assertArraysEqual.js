const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`:) Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`:( Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  }
  return true;
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)  // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
