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
  let sum = x + y;
  return cb(sum);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
};

const multiplyNums = (x, y, cb) => {
  let product = x * y;
  return cb(product);
  // multiplyNums multiplies two numbers and passes the result to the callback.
};

const contains = (item, list, cb) => {

    for (let i = 0; i < list.length; i++) {
      if (item === list[i]) {
         cb(true);
      } else cb(false);
    };
};


/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  let newArr = [];

  for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++){

      //if(array[i])
    }
    cb(newArr);
  };
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
