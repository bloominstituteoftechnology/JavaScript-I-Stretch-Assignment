// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray[i] = cb(elements[i]);
  } return newArray;
};

const reduce = (elements, cb, startingValue) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  let memo = startingValue; // memo is like our counter, it needs a value to start at, here memo is startingValue
  let i = 0; // we'll use this in our for loop setting initial value to 0
  if (startingValue === undefined) { // if the starting value is undefined
    memo = elements[0]; // set memo to the first index of elements
    i = 1; // set i to 1, so the for loop starts at index two
  } // close if
  for (; i < elements.length; i++) { // iterate through the array
    memo = cb(memo, elements[i]);// memo now equals the values passed in by cb
  } // close for loop
  return memo; // return the value of memo
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  let i = 1; // set iterator to 1
  for (; i < elements.length; i++) { // iterate through elements
    if (cb(elements[i])) { // if the value passed from cb is true
      return elements[i]; // return that element
    } // close if
  } // close for
  return undefined; // return undefined -> only reachable when if doesn't return true
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  let i = 1;
  const newArray = [];
  for (; i < elements.lemgth; i++) {
    if (cb(elements[i])) {
      newArray.push(elements[i]);
    }
  } return newArray;
};
/* Extra Credit */

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
