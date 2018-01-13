/* eslint-disable */

const firstItem = (arr, cb) => {
  cb(arr[0]);
};

const getLength = (arr, cb) => {
  cb(arr.length);
};

const last = (arr, cb) => {
  cb(arr[arr.length -1]);
};

const sumNums = (x, y, cb) => {
  cb(x + y);
};

const multiplyNums = (x, y, cb) => {
  cb(x * y);
};

const contains = (item, list, cb) => {


/* STRETCH PROBLEM */
const removeDuplicates = (array, cb) => {
    // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let duplicate = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1] && duplicate.includes(array[i])) {
      duplicate.push(array[i]);
    }
  }
  cb(duplicate);
 };	
  };  
/* eslint-enable */
module.exports = {
  firstItem,
  getLength,
  last,
  sumNums,
  multiplyNums,
  contains,
};
