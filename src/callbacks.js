const firstItem = (arr, cb) => {
  cb(arr[0]);
};

const getLength = (arr, cb) => {
  cb(arr.length);
};

const last = (arr, cb) => {
  cb(arr[arr.length - 1]);
};

const sumNums = (x, y, cb) => {
  cb(x + y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
};

const multiplyNums = (x, y, cb) => {
  cb(x * y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
};

const contains = (item, list, cb) => {
  if (list.includes(item)) {
    cb(true);
  } else {
    cb(false);
  }
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  cb(Array.from(new Set(array)));
};

/* eslint-enable */
module.exports = {
  firstItem,
  getLength,
  last,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates
};
