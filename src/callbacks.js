/* eslint-disable */

const firstItem = (arr, cb) => {
  cb(arr[0]);
};

const getLength = (arr, cb) => {
  cb(arr.length);
};

const last = (arr, cb) => {
  cb(arr[arr.length -1]);
};

const sumNums = (x, y, cb) => {
  cb(x + y);
};

const multiplyNums = (x, y, cb) => {
  cb(x * y);
};

const contains = (item, list, cb) => {
  for (let i = 0; i < list.length; i++ ) {
    if (item === list[i]) return cb(true);
  }
  cb(false);
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  const newObj = {};
  Object.keys(array).map(key => newObj[array[key]] = array[key]);
  const newArr = Object.keys(newObj);
  return cb(newArr);
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
