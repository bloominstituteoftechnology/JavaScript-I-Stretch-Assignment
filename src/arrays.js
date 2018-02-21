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
    newArray.push(cb(elements[i]));
  }
  return newArray;
};
const reduce = (elements, cb, startingValue) => {
  // Original Instructions:
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  //
  // Personal Comments:
  // The accumulator is going to be the sum of all the values in the array in the end HOWEVER, reduce allows you to define (if you want) a 'startingValue' parameter - think
  // of a client requesting his bank statement after starting with $3000 in the bank (this would be the startingValue) and adding to that his 2017directDepostsArray.  Alternatively,
  // if the starting value is not defined, say if the bank account has just been opened, and thus, the starting value will then simply be set to the first value in the array.
  // For all instances where startingValue IS defined, accumulator MUST start as that value.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for -- Notice that in this for loop ([initialization]; [condition]; [final-expression]), the
  // initialization can be left out because its variables "are in the same scope the for loop is in".
  // Satisfies third bullet point.  Each value + corr. index in the 'elements' array is passed through cb, but how are the elements combined? #QUESTION
  let i = 0;
  if (startingValue === undefined) {
    startingValue = elements[0];
    i = 1;
  }
  let accumulator = startingValue;
  for (; i < elements.length; i++) {
    // #QUESTION: What would be an example of a cb function that we can put here, just to see it work.
    accumulator = cb(accumulator, elements[i]);
  }
  return accumulator;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      return elements[i];
    }
  } return undefined;
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
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
  flatten,
};
