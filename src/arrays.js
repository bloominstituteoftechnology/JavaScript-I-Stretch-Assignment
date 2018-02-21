// SAVE ME BABY JESUS FROM THE LINT GODS.
// Completed everything!! :)

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
  each(elements, (item, index) => {
    newArray.push(cb(item, index));
  });

  return newArray;
};

const reduce = (elements, cb, startingValue) => {
  const newElements = elements.slice();

  if (!startingValue) {
    startingValue = newElements.shift();
  }

  let memo = startingValue;

  each(newElements, (el) => {
    memo = cb(memo, el);
  });
  return memo;
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
};

const filter = (elements, cb) => {
  const truthArray = [];

  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      truthArray.push(elements[i]);
    }
  }
  return truthArray;
};

/* STRETCH PROBLEM */
const flatten = (elements) => {
  let outPut = [];
  each(elements, (num) => {
    if (Array.isArray(num)) outPut = outPut.concat(flatten(num));
    else {
      outPut.push(num);
    }
  });
  return outPut;
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

// Notes:
/*  const myNumbers = [1, 2, 3, 4];
  const sumMyNums = myNumbers.reduce((start, next) => {
    return start *= next;
  });
*/
