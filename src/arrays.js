/*
  Complete the following functions.
  These functions only need to work with arrays.
  A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
  The idea here is to recreate the functions from scratch BUT if you'd like,
  feel free to Re-use any of your functions you build within your other functions.
  You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
  You can use the functions that you have already written to help solve the other problems
*/

const each = (elements, cb) => {
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
  for (let i = 0; i < elements.length; i++) {  // need to iterate of elements
    cb(elements[i], i);  // pass each item into the callback as well as the index, which is optional
  }
};

const map = (elements, cb) => {
  // Do NOT use .map, to complete this function.
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const arrnew = [];  // remember map needs a new array
  for (let i = 0; i < elements.length; i++) {  // loop over elements
    arrnew.push(cb(elements[i]));  // push items via the callback
  }
  return arrnew;
};

const reduce = (elements, cb, startingValue) => {
  // Do NOT use .reduce, to complete this function.
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  let startingIndex = 0;  // remmeber that reduce takes all values and returns a single value

  if (startingValue === undefined) {  // per the rules
    startingValue = elements[0];  // startingIndex CANT be first item in array becasue of this line......
    startingIndex = 1;  // i will update startingIndex to 1 so i can start there in my for loop
  }

  for (let i = startingIndex; i < elements.length; i++) {  // create loop while starting at the right place
    startingValue = cb(startingValue, elements[i]);  // i need to update starting value as i go; this is what's keeping track of my value
  }  // i pass through startingValue and the items into the cb per rules
  return startingValue;
};


const find = (elements, cb) => {
  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
  return undefined;
};

const filter = (elements, cb) => {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const trueArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      trueArray.push(elements[i]);
    }
  }
  return trueArray;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  let newArray = [];  // flatten takes multimensional arrays as elements and turns each one into a separate element
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {  // checks if that element is an ARRAY
      newArray = newArray.concat(flatten(elements[i]));  // recursion. calling flatten (checks if something is an array)
      // and then concat takes two arrays and makes one. this is what 'flattens' the multidimensional aspect
    } else {
      newArray.push(elements[i]);
    }
  }
  return newArray;
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
