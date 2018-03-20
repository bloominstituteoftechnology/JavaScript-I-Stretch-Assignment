const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  const item = arr[0];
  cb(item);
};

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  const itemLength = arr.length;
  cb(itemLength);
};

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  const lastItem = arr[arr.length - 1];
  cb(lastItem);
};

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const num = x + y;
  cb(num);
};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const num = x * y;
  cb(num);
};

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let test = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      test = true;
      break;
    }
  }
  cb(test);
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const newArray = array;
  for (let i = 0; i < newArray.length; i++) {
    const tocheckVar = newArray[i];
    for (let ii = i + 1; ii < newArray.length; ii++) {
      if (newArray[i] === newArray[ii]) {
        newArray.splice(ii, 1);
        ii--;
      }
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
  removeDuplicates
};
