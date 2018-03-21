const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  const item = arr[0];
  cb(item);
};

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  const length = arr.length;
  cb(length);
};

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  const lastItem = arr [arr.length - 1];
  cb(lastItem);
};

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y;
  cb(sum);
};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const prod = x * y;
  cb(prod);
};

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  test = false;
  
  for (let i = 0; i <= arr.length; i++) {
    if (item === arr[i]) {
      test = true;
      // return test;
      // break;
    }
  }
  cb(test);
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const res = [];
  for (let i = 0; i <= newArr.length; i++) {
    if(res.indexOf(array[i] !== -1) res.push(array[i]);
    // for (let a = 1; a < newArr.length; a++) {
    //   if (newArr[i] === newarr[a]) {
    //     newArr.splice(a, 1);
    //     console.log(newArr);
    //     a = i+1;

    //   }
    // }
  }
  cb(res);
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
