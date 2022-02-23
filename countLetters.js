const countOnly = require('./countOnly')

Module.exports = countLetters

const sentance = "Lighthouse in the house"

const countLetters = function(text) {
  let amount = text.length
  let letters = []
  for(let i = 0; i < amount; i++)  {
    if( text.charAt(i) !== " ") {
    letters.push(text.charAt(i));
    }
  }
let result = countOnly(letters);
return result;
};
console.log(countLetters(sentance));

Module.exports = countLetters