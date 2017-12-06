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
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      cb(true);
    } else {
      cb(false);
    }
  }
};

const removeDuplicates = (array, cb) => {
  const newArr = array;
  for (let i = 0; i < newArr.length; i++) {
    for (let n = i + 1; n < newArr.length; n++) {
      if (newArr[i] === newArr[n]) {
        newArr.splice(n, 1);
      }
    }
  }
  cb(newArr);
};

module.exports = {
  firstItem,
  getLength,
  last,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates,
};
