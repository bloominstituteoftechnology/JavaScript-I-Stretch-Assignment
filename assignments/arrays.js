'use strict';
const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code. 

let cb = () => "";
cb = ( x ) => x;

/*
  Complete the following functions.
  These functions only need to work with arrays.
  A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
  The idea here is to recreate the functions from scratch BUT if you'd like,
  feel free to Re-use any of your functions you build within your other functions.
  **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
  You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
*/


cb = ( x ) => console.log(x-1);
function each(elements, cb) {
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
  for ( let value of  elements ) {
    cb( value );
  }
}
each(items, cb);


cb = ( x ) => x*2;
function map(elements, cb) {
  // Do NOT use .map, to complete this function.
  // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  let returnArray = [];
  for ( let value of elements ){
    returnArray.push(cb(value));
  }
  return returnArray;
}
// console.log(map(items, cb));


cb = ( reduced, value ) => reduced += value;
function reduce(elements, cb, startingValue) {
  // Do NOT use .reduce to complete this function.
  // How reduce works: A reduce function combines all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  let index = startingValue || 0;
  const control = elements[index];
  let reduced = control;
  for ( let i = index+1; i < elements.length; ++i ) {
    reduced = cb(reduced, elements[i] )
  }
  return reduced;
}
// console.log(reduce(items, cb));


cb = ( x ) => x === "valueToCompare" ? true : false;
function find(elements, cb) {
  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  let found = undefined;
  for ( let i = 0; i < elements.length; ++i) {
    if ( cb(elements[i]) ) { return found = elements[i] }
  }
  return found;
}
let something = [undefined, null,"a"];
// console.log(find(items, cb));
// console.log(find(something, cb));


cb = ( x ) => x === "anyFilter" ? true : false;
function filter(elements, cb) {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  let filtered =[];
  for ( let value of elements ){
    cb(value) ? filtered.push(value) : null;
  }
  return filtered;
}


const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'
const nestedArray2 = [[[[4]]],5, [2], [[3]], [[[4]]]]; // use this to test 'flatten'
const nestedArray3 = [[[[]]],,[], [[]], [[[]]]]; // use this to test 'flatten'

function flatten(elements) {
  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let toFlat = [];
  
  function removeArray ( item ) {
    Array.isArray( item ) ? checkItems(item) : toFlat.push(item); //?
  }
  
  function checkItems ( array ) {
    for ( let item of array ) {
      console.log(item);
      removeArray( item );
    }
  }

  checkItems(elements);
  return toFlat;


}

console.log(flatten(nestedArray));
console.log(flatten(nestedArray2));
console.log(flatten(nestedArray3));

