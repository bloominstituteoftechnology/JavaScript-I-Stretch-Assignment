// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
};

const map = (elements, cb) => {
  const mappedArr = [];
  for (let i = 0; i < elements.length; i++) {
    const ele = cb(elements[i], i);
    mappedArr.push(ele);
  }
  return mappedArr;
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
};

const reduce = (elements, cb, startingValue) => {
  let memo = startingValue;
  let start = 0;
  if (memo === undefined) {
    memo = elements[0];
    start = 1;
  }
  for (let i = start; i < elements.length; i++) {
    memo = cb(memo, elements[i]);
  }
  return memo;
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
  return undefined;
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
};

const filter = (elements, cb) => {
  const result = [];
  for (let i = 0; i < elements.length; i++) {
    const ele = elements[i];
    if (cb(ele)) {
      result.push(ele);
    }
  }
  return result;
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  let flatArr = [];
  for (let i = 0; i < elements.length; i++) {
    const ele = elements[i];
    if (Array.isArray(ele)) {
      flatArr = flatArr.concat(flatten(ele));
    } else {
      flatArr.push(ele);
    }
  }
  return flatArr;
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
