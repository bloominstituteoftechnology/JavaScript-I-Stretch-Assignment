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
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    arr.push(cb(elements[i]));
  }
  return arr;
};

// reduce: Array(a) -> fn(acc, curr) -> a -> a
const reduce = (elements, cb, startingValue) => {
  if (startingValue === undefined) {
    startingValue = elements[0];
    for (let i = 1; i < elements.length; i++) {
      startingValue = cb(startingValue, elements[i]);
    }
  } else {
    for (let i = 0; i < elements.length; i++) {
      startingValue = cb(startingValue, elements[i]);
    }
  }
  return startingValue;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  return reduce(elements, (acc, curr) => {
    return cb(curr) ? curr : undefined;
  }, undefined);
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  return reduce(elements, (acc, curr) => {
    return cb(curr) ? acc.concat(curr) : acc;
  }, []);
};

/* STRETCH PROBLEM */

// Flattens a nested array (the nesting can be to any depth).
// Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
// Recursive definition:
const flatten = (elements) => {
  if (Array.isArray(elements)) {
    return [].concat(...elements.map(flatten));
  // base case:
  } return elements;
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
