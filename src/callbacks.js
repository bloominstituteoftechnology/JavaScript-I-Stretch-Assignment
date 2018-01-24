/* eslint-disable */

const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);  // get first item, pass through cb as argument
};

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  //return cb(arr.length);
  return cb(arr.length);   // get length, pass through cb as argument
};

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);  // get last item, pass through cb as argument
};

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;  // create sum variable
  return cb(sum);  // pass through sum as argument to cb
};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y;  // create product variable
  return cb(product);  // pass through to cb as argument
};

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(let i = 0; i < list.length; i++) {  // for loops to loop over whole array
    if(list[i] === item){ // if the list item equals that given item (paramater)
      return cb(true);  // pass in boolean true to the cb
    }
  }
  return cb(false);  // return false otherwise
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArray = [];  // need new array per 2nd instruction. also no mutating
  for(let i = 0; i < array.length; i++){  // loop over array
    let index = newArray.indexOf(array[i]);  // he indexOf() method returns the first index at which that element can be found
    // if there is no index, it returns -1
    if (index === -1) {  // so if my index equals -1, that means it is not a duplicate
      newArray.push(array[i]);  // push that element into the new array
    }
  }
  cb(newArray); // pass new array into callback
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
