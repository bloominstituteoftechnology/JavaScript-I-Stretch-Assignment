const firstItem = (arr, cb) => cb(arr[0]);

const getLength = (arr, cb) => cb(arr.length);

const last = (arr, cb) => cb(arr[arr.length - 1]);

const sumNums = (x, y, cb) => cb(x + y);

const multiplyNums = (x, y, cb) => cb(x * y);

const contains = (item, list, cb) => cb(list.includes(item));

const removeDuplicates = (array, cb) => cb([...new Set(array)]);

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
