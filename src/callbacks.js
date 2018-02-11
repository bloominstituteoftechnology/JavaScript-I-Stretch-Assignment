/* eslint-disable */

const firstItem = (arr, cb) => {
  return cb(arr[0]);
};

const getLength = (arr, cb) => {
  return cb(arr.length);
};

const last = (arr, cb) => {
  return cb(arr[arr.length - 1]);
};

const sumNums = (x, y, cb) => {
  return cb(x+y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
};

const multiplyNums = (x, y, cb) => {
  return cb(x*y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
};

const contains = (item, list, cb) => {

    for (let i = 0; i < list.length; i++) {
      if (item === list[i]) {
         cb(true);
      } else cb(false);
    };
};
/*
const contains = (item, list, cb) => {
 cb(list.includes(item));
*/
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.


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
