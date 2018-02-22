const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  const result = arr[0];
  return cb(result);
};

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  const result = arr.length;
  return cb(result);
};

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  const result = arr.length[-1];
  return cb(result);
};

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sumNums = x + y;
  cb(sumNums);
};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const result = x * y;
  cb(result);
};

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.indexOf(item)){

  cb(true);
  } else {
  	  cb(false);
  }
};

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
  removeDuplicates
};
