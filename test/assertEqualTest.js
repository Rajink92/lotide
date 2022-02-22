const assertEqual = require('../assertEqual');


assertEqual(([1, 2, 3], [1, 2, 3]), true)  // => true
assertEqual(([1, 2, 3], [3, 2, 1]), false)


module.exports = assertEqual;