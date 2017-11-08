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
  const answer = [];
  for (let i = 0; i < elements.length; i++) {
    answer.push(cb(elements[i]));
  }
  return answer;
};

const reduce = (elements, cb, startingValue) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  let answer = 0;
  if (startingValue !== undefined) {
    answer = startingValue;
  } else answer = elements.splice(0, 1)[0];
  for (let i = 0; i < elements.length; i++) {
    answer = cb(answer, elements[i]);
  }
  return answer;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) return elements[i];
  }
  return 'undefined';
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const answer = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) answer.push(elements[i]);
  }
  return answer;
};

/* STRETCH PROBLEM */


const flatten = (elements) => {
  const newArr = [];

  function checkArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] instanceof Array)) {
        newArr.push(arr[i]);
      }
      if ((arr[i] instanceof Array) && (arr[i].length > 0)) {
        checkArray(arr[i]);
      }
    }
  }
  checkArray(elements);
  return newArr;
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
