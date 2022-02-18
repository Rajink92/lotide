// This is the function definition
function eqArrays(a, b) {
  let isThisEqual = null;
  for (let index = 0; index < a.length; index++)  {
    if (a[index] === b[index])  {
      isThisEqual = true
    }
    else {
      isThisEqual = false
      return isThisEqual
    }
  }
  return isThisEqual
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`)
  }
}

const arrayA = [1, 2, 3]
const arrayB = [1, 2, 3]
// this will be the function call
//eqArrays([1, 2, 3], [1, 2, 3]) // => true
const result1 = eqArrays(arrayA, arrayB)
console.log(result1)

const arrayA2 = [1, 2, 3]
const arrayB2 = [3, 2, 1]
//eqArrays([1, 2, 3], [3, 2, 1]) // => false
const result2 = eqArrays(arrayA2, arrayB2)
console.log(result2)
