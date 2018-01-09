// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const newArray = [];
  each(elements, el => newArray.push(cb(el)));
  return newArray;
};

const reduce = (elements, cb, startingValue) => {
  const newArray = (startingValue === undefined) ? elements.slice(1)
    : elements;
  const newStartingValue = (startingValue === undefined) ? elements[0]
    : startingValue;
  return (newArray.length > 0) ? cb(newStartingValue, reduce(newArray
    .slice(1), cb, newArray[0])) : newStartingValue;
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
  return undefined;
};

const filter = (elements, cb) => {
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      newArray.push(elements[i]);
    }
  }
  return newArray;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      flatten(elements[i]).forEach(el => newArray.push(el));
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
