/* eslint-disable */

const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
};

// getLength is immutable by creating and destroying a copy of the original array.
// I selected a while loop in order to reimpliment the functionality of .length.

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
};

// last, would have been impossible without being able to leverage getLength.

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length -1]);
};

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}; sumNums(1, 2, item => console.log(item));

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
<<<<<<< HEAD
  cb(x*y);
};
=======
  return cb(x * y);
}; multiplyNums(1, 2, item => console.log(item));
>>>>>>> 0eff0570a8db749da911bdd2fba18a347b829178

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let result = false;
  for (let i = 0; i < list.length; i++) {
      if (list[i] === item) {
      result = true;
      }
  };
  return cb(result);
}; contains(5, [1,2,3,4], _item => console.log(_item));

/* STRETCH PROBLEM */

<<<<<<< HEAD
const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.git s
  let newArr = array;

};
=======
const removeDuplicates = (arr, cb) => {
  // removeDuplicates removes all duplicate values from the givearr.
  // Pass the duplicate frearr to the callback function.
  // Do not mutate the originaarr.
  const _arr = arr.slice(); // Lets just keep it easy, a reference is pointed without it.
  const __arr = [];
  _arr.sort(); // not the originaarr
  for (let i = 0; i < arr.length; i++) {
    if(_arr[i - 1 || 0] === _arr[i]){ // evaluate if the values of the sortearr are sequential.
      __arr.push(_arr[i]);
    };
  };
  return cb(__arr);
}; removeDuplicates([1,1,2,3,4], _item => console.log(getLength(_item, (item)=>item)));
>>>>>>> 0eff0570a8db749da911bdd2fba18a347b829178

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
