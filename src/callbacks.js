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
  let sum = x + y;
  cb(sum);
};

const multiplyNums = (x, y, cb) => {
  let prod = x * y;
  cb(prod);
};

const contains = (item, list, cb) => {
  for (let i = 0; i <list.length; i++){
    if (list[i] === item){
      cb(true)
    } else {
      cb(false)
    }
  };
};
/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  let obj = {};
  let resultArr = [];
  for (let i = 0; i < array.length; i++){
    if (!(array[i] in obj)) {
      resultArr.push(array[i])
      obj[array[i]] = true;
    }
  }
   cb(resultArr);
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
