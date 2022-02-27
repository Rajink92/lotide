
const letterPositions = function(sentence) {
  const results = {};
  for (const item of sentence) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (!Array.isArray(results[letter])) {
          results[letter] = [i]
      } else {
        results[letter].push(i);
      }
    }  
  }
  return results;
};

module.exports = letterPositions