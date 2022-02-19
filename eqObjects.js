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
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length)  {
    return false; //edgecase if lengths are not equal, and converts to array
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key]))  {
        return false
      }
    }
    if (object1[key] instanceof Object && object2[key] instanceof Object) {
      if(!eqObjects(object1[key], object2[key]))  {
        return false;
      }
    } else {
      if (object1[key] !== object2[key])  {
        return false;
      }
  }
} 
return true;
}; 