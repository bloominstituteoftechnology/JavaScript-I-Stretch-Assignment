/* eslint-disable */

const firstItem = (arr, cb) => {
// firstItem passes the first item of the given array to the callback function.

  cb(arr[0]);
};

const getLength = (arr, cb) => {
  //cb(arr.length);
  cb(arr.length);
  // getLength passes the length of the array into the callback.
};

const last = (arr, cb) => {
 cb(arr[arr.length - 1]);
  // last passes the last item of the array into the callback.
};

const sumNums = (x, y, cb) => {
  cb(x + y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
};

const multiplyNums = (x, y, cb) => {
  cb (x * y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
};

const contains = (item, list, cb) => {
for (let i = 0; i < list.length; i++) {
  if (list[i] === item) {
    return cb(true);
  } 
  cb(false);
}

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
};

/* STRETCH PROBLEM */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  const newArr = [];
  each(array, (value, index) => {
    contains(value, newArr, (isValue) => {
      if (!isValue) {
        newArr.push(value);
      }
    });
  });
return newArr;
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
