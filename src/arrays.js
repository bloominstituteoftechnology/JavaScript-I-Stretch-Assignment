const each = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};

const map = (arr, cb) => {
  const output = [];
  each(arr, item => output.push(cb(item)));
  return output;
};

const reduce = (arr, cb, value) => {
  const copy = [...arr];
  let acc = value || copy.shift();
  each(copy, item => acc = cb(acc, item));
  return acc;
};

const find = (arr, cb) => arr.reduce((a, c) => (cb(c) ? c : null));

const filter = (arr, cb) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) output.push(arr[i]);
  }
  return output;
};

const flatten = arr => arr.reduce((a, c) => (Array.isArray(c) ? a.concat(flatten(c)) : a.concat(c)), []);

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
