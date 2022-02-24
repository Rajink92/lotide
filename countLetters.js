const countLetters = function(text) {
  const space = text.split(' ').join('');
  const letters = {};
  for (const letter of space) {
    if (!letters[letter]) letters[letter] = 0;
    letters[letter] += 1;
  }
  return letters;
};

module.exports = countLetters