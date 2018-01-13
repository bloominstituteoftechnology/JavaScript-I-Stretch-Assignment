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
  const mappedvalues = [];
  each(elements, item => (mappedvalues.push(cb(item))));
  return mappedvalues;
};

const reduce = (elements, cb, startingValue) => {
  const sum = elements.reduce((runningTotal, num) => runningTotal + num);
  cb(sum);
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === cb) return true;
    return false;
  }
};
const filter = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    map(elements[i] === cb);
  }
};

const flatten = (elements) => {
  let flatArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      flatArray = flatArray.concat(flatten(elements[i]));
    } else {
      flatArray.push(elements[i]);
    }
  }
  return flatArray;
};

/* STRETCH PROBLEM */

/* eslint-enable no-unused-vars, max-len */
