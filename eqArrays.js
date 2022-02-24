function eqArrays(a, b) {
  let isThisEqual = null;
  for (let index = 0; index < a.length; index++)  {
    if (a[index] === b[index])  {
      isThisEqual = true
    }
    else {
      isThisEqual = false
      return isThisEqual
    }
  }
  return isThisEqual
}

module.exports = eqArrays;
