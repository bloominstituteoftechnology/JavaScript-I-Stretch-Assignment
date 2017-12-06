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
  const mapArr = [];
  each(elements, item => (mapArr.push(cb(item))));
  return mapArr;
};

const reduce = (elements, cb, startingValue) => {
  const eleCopy = elements.slice();
  let ele = startingValue || eleCopy.shift();
  each(eleCopy, (item) => {
    ele = cb(ele, item);
  });
  return ele;
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) return elements[i];
  }
  return undefined;
};

const filter = (elements, cb) => {
  const filterMe = [];
  each(elements, (item) => {
    if (cb(item)) filterMe.push(item);
  });
  return filterMe;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  const flat = reduce(elements, (flatter, item) => {
    if (Array.isArray(item)) return flatter.concat(flatten(item));
    return flatter.concat(item);
  }, []);
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
