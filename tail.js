const assertEqual = require('./assertEqual')

const tail = function (array) {
 let words = array.slice(1)
 return words
}

module.exports = tail;
