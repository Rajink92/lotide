const { Module } = require("module");

const flatten = (array) => {
  let result = [];
  if (!(Array.isArray(array))) {
    // console.log("This is not an array")
    return result
  } 
  // for (let element of array) {
  //   if (Array.isArray(array)) {
  //     for (let element of array)
  //     result.push(element)
  //     console.log("pushing" , element)
  //   }
  //   result.push(element)
  // }
  array.forEach(element => {
    // console.log("first loop element" , element)
    if (Array.isArray(element)) {
      // console.log("array element", element)
      element.forEach(element => result.push(element))
    } else {
      result.push(element)
      // console.log(result)
    }
  });
  // console.log("THIS IS THE RESULT", result)
  return result
}
Module.exports = flatten
// function eqArrays(a, b) {
//   let isThisEqual = null;
//   for (let index = 0; index < a.length; index++)  {
//     if (a[index] === b[index])  {
//       isThisEqual = true
//     }
//     else {
//       isThisEqual = false
//       return isThisEqual
//     }
//   }
//   return isThisEqual
// }
const myResult = flatten([1, 2, [3, 4], 5, [6]]) //=> [1, 2, 3, 4, 5, 6]
console.log(myResult)