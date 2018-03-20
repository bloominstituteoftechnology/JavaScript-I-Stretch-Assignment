/*
  Complete the following functions.
  These functions only need to work with arrays.
  A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
  The idea here is to recreate the functions from scratch BUT if you'd like,
  feel free to Re-use any of your functions you build within your other functions.
  You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
  You can use the functions that you have already written to help solve the other problems
*/

const each = (elements, cb) => {
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each

  for (let i = 0; i < elements.length; i++) {
    // pass each el and its index in the given array to a cb
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Do NOT use .map, to complete this function.
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.

  // hold transformed els into an array
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    // transform each el in the given array and push the result to newArr
    newArr.push(cb(elements[i]));
  }
  // output: array containing the transformed els
  return newArr;
};

const reduce = (elements, cb, startingValue) => {
  // Do NOT use .reduce, to complete this function.
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  // a holds either the starting value or the first el
  let a;
  if (startingValue) {
    a = startingValue;
  } else {
    // if startingValue is falsy assign a to the first el of the given arr
    a = elements.shift();
  }
  // copy the given arr
  const sliced = elements.slice();
  for (let i = 0; i < sliced.length; i++) {
    // pass a and els of sliced into a cb
    // set a to the result of the combining function
    a = cb(a, sliced[i]);
  }
  // output: result of combining all the els in the given arr with cb
  return a;
};

const find = (elements, cb) => {
  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    // iterate over the given arr
    if (cb(elements[i])) {
      // only return elements for which cb return true
      return elements[i];
    }
  }
};

const filter = (elements, cb) => {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test

  // hold the els that pass the check in a new array
  const result = [];
  for (let i = 0; i < elements.length; i++) {
    // check if the els pass the test in cb
    if (cb(elements[i])) {
      result.push(elements[i]);
    }
  }
  // output: array that holds all elements that passed a test in cb
  return result;
};

/* STRETCH PROBLEM */

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
  flatten
};
