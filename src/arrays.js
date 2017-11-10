// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each

  // loop through each element and pass it and the index to callback
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.

//   //initialize empty array
//   const mappedValues = [];
//   //loop through each element in elements and pass it to cb and push that to the empty array
//   for (let i = 0; i < elements.length; i++) {
//     mappedValues.push(cb(elements[i]));
//   }
//   return mappedValues;
// };

// take the elements from callback used in each() and push them into newArr
  const newArr = [];
  each(elements, (elem, i) => {
    newArr.push(cb(elem, i));
  });
  return newArr;
};
const reduce = (elements, cb, startingValue) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  // creates a copy of, not a pointer to, elements
  const elementsCopy = elements.slice();
  // create a memory space for a default or initial value since it can vary between an arbitrary value or undefined
  // can use ternary statement but it's better practice to stay away from them: if (startingValue === undefined) ? elements[0] : startingValue;
  let memo = startingValue || elementsCopy.shift();
  each(elementsCopy, (item) => {
    // more closure here
    memo = cb(memo, item);
  });
  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.

  // loop through each element and check if it equals item.
  for (let i = 0; i < elements.length; i++) {
    if (elements[i]) {
      // if element is equal to item pass true to cb else false = undefined
      cb(true);
  }
  return undefined;
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const arrAll = [];
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i]);
    if (cb(elements[i]) === true) {
      arrAll.push(elements[i]);
    }
  }
  return arrAll;
};
/* STRETCH PROBLEM */

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
   /* flattenedArray
   loop over elements;
   if element is not an array
   push element into array
   else return flattened function (recursion)
   return flattenedArray; */
  const flattenedArray = reduce(elements, (prev, next) => {
    if (Array.isArray(next)) return prev.concat(flatten(next));
    return prev.concat(next);
  }, [],);
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
