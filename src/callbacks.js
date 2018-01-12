/* eslint-disable */

const firstItem = (arr, cb) => {
 return cb(arr[0]);
 // firstItem passes the first item of the given array to the callback function.
};

const getLength = (arr, cb) => {
  return cb(arr.length);// getLength passes the length of the array into the callback.
};

const last = (arr, cb) => {
  return cb(arr[arr.length-1]);
  // last passes the last item of the array into the callback.
};

const sumNums = (x, y, cb) => {
 return cb(x+y); // sumNums adds two numbers (x, y) and passes the result to the callback.
};

const multiplyNums = (x, y, cb) => {
 return cb(x*y); // multiplyNums multiplies two numbers and passes the result to the callback.
};

const contains = (item, list, cb) => {
  for (let i =0; i < list.length; i++){
  if (item===list[i]){
    return cb(true)
  }
  }
  return cb(false);
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  const newArray=[];
  
  
  
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
