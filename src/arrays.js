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

const reduce = (elements, cb, startingValue) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  const elementsCopy = elements.slice();
  let memo = startingValue || elementsCopy.shift();
  each(elementsCopy, (item) => {
    memo = cb(memo, item);
  });
  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) return elements[i];
  }
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const x = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) x.push(elements[i]);
  }
  return x;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const elm = [];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].length === 0) {
      elm.push(elements[i]);
    } else {
      elm.push(elements[i]);
      for (let x = 0; x < elements.length; x++) {
        if (elements[i][x] === 0) {
          elm.push(elements[i][x]);
        } else {
          elm.push(elements[i][x]);
          for (let y = 0; y < elements.length; y++) {
            if (elements[i][x][y] === 0) {
              elm.push(elements[i][x][y]);
            } else {
              elm.push(elements[i][x][y]);
            }
          }
        }
      }
    }
    return elm;
  }
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
