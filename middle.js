//actual function
const array1 = ([1, 2, 3]) // => [2]
//console.log(array1)
//middle([1, 2, 3, 4, 5]) // => [3]
const midElement = Math.floor(array1.length / 2);
const middle = function(array1)  {
  //console.log(array1)
  for( elements of array1 ) {
    let arrayLength = array1.length;
    if (arrayLength % 2 != 0)  {
      console.log(array1[midElement])
    }
    else {
      console.log([])
    }
  }
}
middle(array1)

//loop though array
//get total number of elements in array
// see if that number is NOT divisible by 2
// if it does return the middle value
//else return empty array

