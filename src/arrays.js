// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built-in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i += 1) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const newArray = [];
  each(elements, (item, index) => {
    newArray.push(cb(item, index));
  });
  return newArray;
};

// ** Revisit reduce use Python Tutor
const reduce = (elements, cb, startingValue) => {
  if (!startingValue) startingValue = elements.shift(0);
  let result = startingValue;
  each(elements, el => result = cb(result, el));
  return result;
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) return elements[i];
  }
};

const filter = (elements, cb) => {
  const filtered = [];
  each(elements, (item) => {
    return cb(elements[item]) ? filtered.push(elements[item]) : filtered;
  });
  return filtered;
};

/* STRETCH PROBLEM */
// ** Revisit flatten with Python Tutor
const flatten = (elements) => {
  let flat = [];
  each(elements, (item) => {
    return Array.isArray(item) ? flat = flat.concat(flatten(item)) : flat.push(item);
  });
  return flat;
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
