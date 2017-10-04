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
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  };
};
each(
  ['this', 'is', 'a'],
  (a, b) => {console.log(`${a} ${b}`)});


const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const _elements = [];
  each(elements, (element) => {
    _elements.push(cb(element));
  });
  return _elements;
};

console.log(
  map(
  [100, 2, 433],
  (a) => {
  return a * 2;
}));
// ||
// function map(arr, cb) {
//   const _arr = [];
//   for (let i = 0; i < arr.length;i++){
//     _arr.push(cb(arr[i]));
//   }
//   return _arr;
// }

// console.log(map([1,2,3,4],
//   function(item){
//     return item * 2;})
//     );

// -Example of standard
// const nums = [12,23,34,45];
// const sum = nums.reduce((memo, value)=>{
//   return memo + value;
// }); console.log(sum);

const reduce = (elements, cb, startingValue = 0) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  let loopPos = startingValue; let closure = 0; // had to initialize it anyway
  if (startingValue >= elements.length) loopPos = 0; // only if defined
  for (var i = loopPos; i < elements.length; i++) {
    closure = cb(closure, elements[i]);
  };
  // console.log(loopPos + '=>' + closure);
  return closure;
};

console.log(reduce(
  [1, 2, 3],
  (cl, item) => {
    return cl + item;
  }, 0));

console.log(reduce(
  [1, 2, 3],
  (cl, item) => {
    return cl + item;
  }, 2));

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (var i = 0; i < elements.length; i++) {
    if (cb(elements[i])) return elements[i];
  };
};

// const asdArray = [1, 2, 3, 4, 5, 6, 7];
// const target = 4;
// console.log(
//   find(asdArray,
//     (value, index) => {
//       return value+" "+index;
//     }));

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  const filteredItems = [];
  elements.forEach((item) => {
    if (cb(item)) filteredItems.push(item);
  });
  return filteredItems;
};
/* Extra Credit */

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const flattenedArr = reduce(elements, () => {
    if (Array.isArray(item)) return memo.concat(flatten(item));
    return memo.concat(item);
  }, []);
  return flattenedArr;
};

// /* eslint-enable no-unused-vars, max-len */

// module.exports = {
//   each,
//   map,
//   reduce,
//   find,
//   filter,
//   flatten,
// };
