const countLetters = function(text) {
  const space = text.split(' ').join('');
  const letters = {};
  for (let letter of space) {
    if (!letters[letter]) letters[letter] = 0;
    letters[letter] += 1;
  }
  return letters;
};

const result1 = countLetters('Rajin')
console.log(result1)
module.exports = countLetters