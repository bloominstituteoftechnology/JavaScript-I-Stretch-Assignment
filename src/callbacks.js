/* eslint-disable */

const firstItem = (arr, cb) => {
  cb(arr[0]);
};

const getLength = (arr, cb) => {
  cb(arr.length);
};

const last = (arr, cb) => {
  cb(arr[arr.length - 1]);
};

const sumNums = (x, y, cb) => {
  cb(x + y);
};

const multiplyNums = (x, y, cb) => {
  cb(x * y);
};

const contains = (item, list, cb) => {
  let Contains = false;

  for(let i = 0; i <= list.length - 1; i++) {
    if(list[i] === item) {
      Contains = true;
    }
  }
  cb(Contains);
};

/* STRETCH PROBLEM */

const removeDuplicates = (arr, cb) => {
  let newArr = arr.filter(function(item, position) {
   return arr.indexOf(item) === position
  })

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
