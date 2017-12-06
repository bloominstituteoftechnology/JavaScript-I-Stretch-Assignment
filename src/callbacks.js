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
  if (list.includes(item)) {
    cb(true)
  }
  else {
    cb(false)
  }
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
function removedup(array) {
  let nArray = []
  for (let i = 0; i < array.length; i++) {
    if(nArray.indexOf(array[i]) === -1) {
      nArray.push(array[i])
    }
  }
  return nArray
}
  cb(removedup(array));
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
