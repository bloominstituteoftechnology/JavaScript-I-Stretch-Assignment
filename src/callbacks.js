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
  
  cb((x + y));
};

const multiplyNums = (x, y, cb) => {
  
  cb((x * y));
};

const contains = (item, list, cb) => {
  
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      cb(true);
    } else {
      cb(false);
    }
  };
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (newArr.indexOf(array[i]) === -1) {
      newArr.push(array[i]);
    }
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
