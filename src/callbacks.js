// Completed everything!! :)

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
  cb(list.includes(item));
};

/* STRETCH PROBLEM */
const removeDuplicates = (array, cb) => {
  const newArray = array.slice();

  for (let i = 0; i < newArray.length - 1; i++) {
    if (newArray[i] === newArray[i++]) {
      newArray.splice(i + 1, 1);
    }
  }

  cb(newArray);
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
