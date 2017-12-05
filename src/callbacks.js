/* eslint-disable */

const firstItem = (arr, callBack) => {
  // firstItem passes the first item of the given array to the callback function.
  callBack(arr[0]);
};

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
};

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
};

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
};

const contains = (item, list, cb) => {};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
};

/* eslint-enable */
module.exports = {
  firstItem,
  getLength,
  last,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates,
};
