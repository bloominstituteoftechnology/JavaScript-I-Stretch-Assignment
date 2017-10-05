// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems
const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];
let elements = foods;

const each = (elements, cb) => {
 // Iterates over a list of elements, yielding each in turn to the `cb` function.
 // This only needs to work with arrays.
 // You should also pass the index into `cb` as the second argument
 // based off http://underscorejs.org/#each
 let i = 0;
 for (; i < elements.length; i++) {
  cb(elements, i);
 }
};

each(elements, (elements, i, cb) => {
 //console.log(elements[i], ` is indexed at ${i}`);
});

const map = (elements, cb) => {
 // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
 // Return the new array.

 let mapArry = [];
 each(elements, (elements, i, cb) => {
  //    mapArry.push(cb(elements[i]));    
 });

 let i = 0;
 for (; i < elements.length; i++) {
  mapArry.push(cb(elements[i]));
 }

 return mapArry;
};


const reduce = (elements, cb, startingValue) => {
 // Combine all elements into a single value going from left to right.
 // Elements will be passed one by one into `cb`.
 // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
 startingValue = elements[0];

 let i = 1;
 for (; i < elements.length; i++) {
  cb(startingValue += elements[i]);
  console.log(startingValue);
 }
 return startingValue;
};


const find = (elements, cb) => {
 // Look through each value in `elements` and pass each element to `cb`.
 // If `cb` returns `true` then return that element.
 // Return `undefined` if no elements pass the truth test.

 let i = 0;

 for (; i < elements.length; i++) {
  // console.log(elements[i]);
  if (cb(elements[i])) {
   return elements[i];
  }
 }
 return undefined;
};

/*
const arr = [1, 2, 3, 4, 5];

console.log(find(arr, (checkEl) => {return checkEl === 5}));
console.log(find(arr, (checkEl) => {return checkEl === 12}));


*/

Array.prototype.equals = function(array) {
 if (!array) {
  return false;
 }
 if (this.length != array.length) {
  return false;
 }

 let i = 0;
 for (; i < this.length; i++) {
  //if nested:
  if (this[i] instanceof Array && array[i] instanceof Array) {
   if (!this[i].equals(array[i])) {
    return false;
   }
  } else if (this[i] != array[i]) {
   return false;
  }
 }
 return true;
}

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test

  let i = 0;

  if (cb(elements)) {
   return elements;
  }

  return []; {};

  /*
  const arr = [1, 2, 3, 4, 5];
  console.log(filter(arr, (checkArr) => {return checkArr.equals([1, 2, 3, 4, 5])}));
  console.log(filter(arr, (checkArr) => {return checkArr.equals([])}));
  */

  /* Extra Credit */
  const flatArr = [];

  const flatten = (elements) => {
   // Flattens a nested array (the nesting can be to any depth).
   // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

   let i = 0;

   for (; i < elements.length; i++) {

    if (elements instanceof Array && elements[i] instanceof Array) {
     flatten(elements[i]);
    } else {
     flatArr.push(elements[i])
    }
   }
   return flatArr;

  };
  /*
  const arr = [1, [2], [3, [[4]]]];
  console.log(flatten(arr));
  const arr2 = [1, [2], [3, [[4]]], [[[[[99]]]]]];
  console.log(flatten(arr2));
  */

  /* eslint-enable no-unused-vars, max-len */

  module.exports = {
   each,
   map,
   reduce,
   find,
   filter,
   flatten,
};
