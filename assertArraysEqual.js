function eqArrays(a, b) {
  for (let index = 0; index < a.length; index++)  {
    if (a[index] !== b[index])  {
      return false
    }
  }
  return true
}
const assertEqual = function(a, b) {
  if (a === b) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`)
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed: ${a} === ${b}`)
  }
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)  // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
