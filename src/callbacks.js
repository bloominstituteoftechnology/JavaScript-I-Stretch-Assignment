/* eslint-disable */

const firstItem = (arr, cb) => {
  cb(arr[0]);
};


const getLength = (arr, cb) => {
  cb(arr.length);
};

const last = (arr, cb) => {
  cb(arr.slice(-1)[0]);// last passes the last item of the array into the callback.
};

const sumNums = (x, y, cb) => {
  const sum = x + y;
  cb(sum);// sumNums adds two numbers (x, y) and passes the result to the callback.
};

const multiplyNums = (x, y, cb) => {
  const product = x * y;
  cb(product);// multiplyNums multiplies two numbers and passes the result to the callback.
};

const contains = (item, list, cb) => {
  cb(list.includes(item));// contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // can use forEach loop ...removeDuplicates removes all duplicate values from the given array.
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
