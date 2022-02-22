const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')

const array1 = ([1, 2, 3]) // => [2]
//console.log(array1)
//middle([1, 2, 3, 4, 5]) // => [3]

assertArraysEqual(middle(array1), [2])
