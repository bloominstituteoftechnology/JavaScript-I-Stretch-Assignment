/* eslint-disable */

const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
};

// getLength is immutable by creating and destroying a copy of the original array.
// I selected a while loop in order to reimpliment the functionality of .length.

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  const _arr = arr.slice();
  let closure = 0;
  while (_arr) {
    closure += 1;
    _arr.pop();
    if (_arr[0] === undefined) {
      break;
    }
  }
  return cb(closure);
};

// last, would have been impossible without being able to leverage getLength.

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  return cb(arr[getLength(arr, item => item) - 1]);
};

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
};

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let result = false;
  for (let i = 0; i < list.length; i++) {
      if (list[i] === item) {
      result = true;
      }
  };
  return cb(result);
};

/* STRETCH PROBLEM */

const removeDuplicates = (arr, cb) => {
  // removeDuplicates removes all duplicate values from the givearr.
  // Pass the duplicate frearr to the callback function.
  const _arr = new Set(arr);
  const __arr = new Array(..._arr);  
  return cb(__arr);
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
