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
  const arrayLength = arr.length;
  cb(arr[arrayLength - 1]);
};

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y;
  cb(sum);
};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const sum = x * y;
  cb(sum);
};

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(let i = 0; i < list.length; i++){
    if(item === list[i]) return cb(true); 
  }
  return cb(false);
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const newArr = [];
  for(let i = 0; i < array.length; i++){
    contains(array[i], newArr, (isDuplicate) => {if(!isDuplicate) {
      newArr.push(array[i]);
      }
    })
  }
  cb(newArr);
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
