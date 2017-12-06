/* eslint-disable */

const firstItem = (arr, cb) => {
  cb(arr[0]);
};

const getLength = (arr, cb) => {
  cb(arr.length); 
};

const last = (arr, cb) => {
  cb(arr[arr.length-1]);
};

const sumNums = (x, y, cb) => {
  cb(x+y);
};

const multiplyNums = (x, y, cb) => {
  cb(x*y);
};

const contains = (item, list, cb) => {
  let itemIsPresent = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      itemIsPresent = true;
      break;
    }
  }
  cb(itemIsPresent);
};

const removeDuplicates = (array, cb) => {
  let noDupesArray = [];
  for (let i = 0; i < array.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < noDupesArray.length; j++) {
        if (array[i] === noDupesArray[j]) {
          isDuplicate = true
        }        
      }
      if (!isDuplicate) {
        noDupesArray.push(array[i])        
      }
  }
  cb(noDupesArray);
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
