/* eslint-disable */

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    const value = elements[i];
    newArray.push(cb(value, i, elements));
  }
  return newArray;
};

const reduce = (elements, cb, startingValue) => {
  let memo = startingValue;
  let i = 0;

  if (startingValue === undefined) {
    memo = elements[0];
    i = 1;
  }

  for (; i < elements.length; i++) {
    memo = cb(memo, elements[i]);
  }
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
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      retFlat = retFlat.concat(flatten(elements[i]));
    } else {
      retFlat.push(elements[i]);
    }
  }
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
