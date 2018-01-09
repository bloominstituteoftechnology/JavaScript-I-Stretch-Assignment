/* eslint-disable */

const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
};

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
};

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  let lastItem = arr[arr.length - 1]
  cb(lastItem);
};

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let results = x + y;
  cb(results);
};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let results = x * y;
  cb(results);
};

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let result = (list.includes(item));
  cb(result);
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
   let newArray = [];
   for (let i = 0; i < array.length; i++) {
     if (newArray.indexOf(array[i]) === -1) {
       newArray.push(array[i]);
    }
   }
   cb(newArray);
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