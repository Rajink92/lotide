const findKeyByValue = function(searchObject, keySearch) {

  for (let key of Object.keys(searchObject)) {
    if (searchObject[key] === keySearch) {
      return key;
    }
  }
};

Module.exports = findKeyByValue