const firstItem = (arr, cb) => {
  cb(arr[0]);
};

const getLength = (arr, cb) => {
  cb(arr.length);
};

const last = (arr, cb) => {
  cb(arr.slice(-1)[0]);
};

const sumNums = (x, y, cb) => {
  const sum = x + y;
  cb(sum);
};

const multiplyNums = (x, y, cb) => {
  const product = x * y;
  cb(product);
};

const contains = (item, list, cb) => {
  cb(list.includes(item));
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  cb([...new Set(array)]);
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
