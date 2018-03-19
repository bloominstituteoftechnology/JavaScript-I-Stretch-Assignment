const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  const fitem = arr[0];
  cb(fitem);
};

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  const larr = arr.length;
  cb(larr);
};

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  const larr = arr.length - 1;
  const litem = arr[larr];
  cb(litem);
};

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sxy = x + y;
  cb(sxy);
};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const mxy = x * y;
  cb(mxy);
};

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.indexOf(item) > -1) {
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
