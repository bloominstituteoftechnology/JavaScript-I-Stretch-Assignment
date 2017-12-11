ARRAYS
// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {

  // getLength passes the length of the array into the callback.
  for(let i =0; i < elements.length; i++)
  cb(elements [i], i);
}
};
each([],(elements, index) =. {
  console.log(`${elements}, ${index}`);
});

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
const newArray =[];
each(elements, (item, index) => {
  newArray.push(cb(item, index));
});
};
const reduce = (elements, cb, startingValue) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
const newElements = elements.slice();
if(!startingValue) {
startingValue = newElements.shift();
let memo = startingValue;
each(newElements, (el) =>
memo= cb(memo, el);
});
return memo;
};
const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
 if (element % 2 ===0 {
      return true;
    } else {
};
console.log([].find(isPrime));
// didn't get this one
};
const filter = (elements, cb) => {
 var evens = _.filter([1, 2, 3, 4, 5, 6], function(elements){ return elements % 2 == 0; });
if (list[item]){
  cb(true);
 };
else {cb(false)}
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
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
