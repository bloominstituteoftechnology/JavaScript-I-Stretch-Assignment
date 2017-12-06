/* eslint-disable */

const firstItem = (arr, cb) => {
  cb(arr[0])
};

const getLength = (arr, cb) => {
    cb(arr.length)
};

const last = (arr, cb) => {
  for(let i = 0; i < arr.length; i++) {
    cb(arr[arr.length -1])
  }
};

const sumNums = (x, y, cb) => {
  cb(x + y)
};

const multiplyNums = (x, y, cb) => {
  cb(x * y)
};

const contains = (item, list, cb) => {
  let containsItem = false
  for(let i = 0; i <= list.length; i++)
  if(list[i] === item) {
    containsItem = true
  }
  cb(containsItem)
  }


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
