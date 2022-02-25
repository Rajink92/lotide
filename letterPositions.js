
const letterPositions = function(sentence) {
  const results = {};
  for (const item of sentence) {
    console.log(item);
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
}
return results
}

module.exports = letterPositions