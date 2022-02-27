const eqArrays = require('./eqArrays')
const words = ["hello", "world", "lighthouse"];

const without = function (source, itemsToRemove)  {
  let result = [];
  if (eqArrays(source, itemsToRemove))  {
    return result
  } 
  for (let item of source)  {
    // console.log(item);
    if (!(itemsToRemove.includes(item)))  {
      result.push(item);
    }
  }
  //words.without(source ,[itemsToRemove]);
  return result
}


without(words, ["lighthouse"]); 
console.log(without(words, ["lighthouse"]))

module.exports = without