const countOnly = function(allItems) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
}
return results
}

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

