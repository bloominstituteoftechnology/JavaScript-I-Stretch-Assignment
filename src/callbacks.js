/* eslint-disable */

const firstItem = (arr, cb) => {  /* CHECK */
  cb (arr[0]);
};

const getLength = (arr, cb) => {  /* CHECK */
  cb (arr.length);
};

const last = (arr, cb) => {  /* CHECK */
  cb (arr[arr.length - 1]);
};

const sumNums = (x, y, cb) => {  /* CHECK */
  cb (x + y);
};

const multiplyNums = (x, y, cb) => {  /* CHECK */
  cb (x * y);
};

const contains = (item, list, cb) => {  /* CHECK */
  for (let i = 0; i < list.length; i++)
  {
    if (item === list[i])
    {
      cb (true);
    } else {
      cb (false);
    }
  }
};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {  /* CHECK */
  cb(array.filter((el, i, arr) => arr.indexOf(el) === i));
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
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
