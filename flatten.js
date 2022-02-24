const flatten = (array) => {
  let result = [];
  if (!(Array.isArray(array))) {
    return result
  } 
  
  array.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(element => result.push(element))
    } else {
      result.push(element)
     
    }
  });
  return result
}
module.exports = flatten

const myResult = flatten([1, 2, [3, 4], 5, [6]]) //=> [1, 2, 3, 4, 5, 6]

console.log(myResult)