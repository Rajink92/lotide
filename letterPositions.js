
const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== ' ') {
      if (!Array.isArray(results[letter])) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;