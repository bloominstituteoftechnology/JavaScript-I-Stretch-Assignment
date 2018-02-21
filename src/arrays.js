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
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Do NOT use .map, to complete this function.

  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newArray = [];

  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i])); // Each value of 'elements' is passed through cb, then passed pushed onto 'newArray'
  }
  return newArray;
};
const reduce = (elements, cb, startingValue) => {
  // Do NOT use .reduce, to complete this function.
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument. // Immediately indicates that you will have cb(startingValue, elements[i])
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value. // Notice "if" -- tipping you off to the likely need for a conditional statement
  let i = 0;

  if (startingValue === undefined) { // Why is this necessary?
    startingValue = elements[0];
    i = 1;
  }

  let memo = startingValue;

  for (; i < elements.length; i++) {
    memo = cb(memo, elements[i]); // Satisfies third bullet point.  Each value + corr. index in the 'elements' array is passed through cb, but how are the elements combined? #QUESTION
  }
  return memo;
};
const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`. // for (let i = 0 ; i < elements.length ; i++) AND cb(elements[i], i)
  // If `cb` returns `true` then return that element. // If statement
  // Return `undefined` if no elements pass the truth test. // ''
  for (let i = 0; i < elements.length; i++) {
    if ((cb(elements[i])) === true) {
      return elements[i];
    } // Careful not to put return statements outside the wrong brackets! #QUESTION -- Why does 'return undefined;' not work here???
  } return undefined;
};

const filter = (elements, cb) => {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test

  // Return an empty array if no elements pass the truth test
// INITIAL ATTEMPT:
//
// for (let i = 0; i < elements.length; i++) {
//   if ((cb(elements[i])) === true) {
//     newArray.push = (elements[i]);
//     return newArray;
//   } else if (elements.length === 0) {
//     return elements;
//   }
// };
// Missing declaration of newArray.  'true' does not need to be expicitely stated as it is implied. 'return newArray' comes AFTER closing bracket of 'if'
// Lastly, you did not need to tell JS to print the empty 'elements' array because the function will do that anyway, if no elements pass the truth test.
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      newArray.push(elements[i]);
    }
  } return newArray;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth). // Since this function must work with "any" depth of nesting, a recursive array flattening function is necessary
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

  const flat = [];
  elements.forEach((item) => {
    if (Array.isArray(item)) { // This uses the Array constructors 'isArray' property which returns true if a variable is an array, and false if not.
      flat.push(...flatten(item)); // If ^ finds an array, that array must be flattened into individual items, then those items are looped back through the 'flatten' function.
    } else { // What looks like an ellipsis '...' is called a spread operator (see link below)
      flat.push(item);// Through recursion, eventually all the arrays will be flattened to a single list of items (with no arrays), and those items will be pushed into one flattened array.
    } // #QUESTION: How do you know whether a semi-colon is required or not???
  });
  return flat;
};
// Based on the following discussion thread: https://stackoverflow.com/questions/30048388/javascript-recursive-array-flattening
//  //On "Spread Operator": https://docs.microsoft.com/en-us/scripting/javascript/reference/spread-operator-decrement-dot-dot-dot-javascript
/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
