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
  if (startingValue === undefined) {
    startingValue = newElements.shift();
  }
  let memo = startingValue;
  each(newElements, (el) => {
    memo = cb(memo, el);
  });
  return memo;
};

const find = (elements, cb) => {
  const returnArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
  return returnArr;
};

const filter = (elements, cb) => {
  const returnArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      returnArr.push(elements[i]);
    }
  }
  return returnArr;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  let retFlat = [];
  each(elements, (num) => {
    if (Array.isArray(num)) {
      retFlat = retFlat.concat(flatten(num));
    } else {
      retFlat.push(num);
    }
  });
  return retFlat;
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
