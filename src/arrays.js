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
  const arrnew = [];
  for (let i = 0; i < elements.length; i++) {
    arrnew.push(cb(elements[i]));
  }
  return arrnew;
};

const reduce = (elements, cb, startingValue) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  let startingIndex = 0;

  if (startingValue === undefined) {
    startingValue = elements[0];
    startingIndex = 1;
  }

  for (let i = startingIndex; i < elements.length; i++) {
    startingValue = cb(startingValue, elements[i]);
  }
  return startingValue;
};


const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
  return undefined;
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const trueArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      trueArray.push(elements[i]);
    }
  }
  return trueArray;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  let newArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      newArray = newArray.concat(flatten(elements[i]));  // recursion. calling flatten (checks if something is an array)
      // and then concat takes two arrays and makes one
    } else {
      newArray.push(elements[i]);
    }
  }
  return newArray;
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
