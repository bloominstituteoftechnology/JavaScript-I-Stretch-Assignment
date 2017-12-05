// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const newArray = [];
  each(elements, (item, index) => {
    newArray.push(cb(item, index));
  });
  return newArray;
};

const reduce = (elements, cb, startingValue) => {
  const newElements = elements.slice();
  if (startingValue === undefined) {
    startingValue = newElements.shift();
  }
  let memo = startingValue;
  each(newElements, (el) => {
    memo = cb(memo, el);
  });
  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  let outPut = [];
  each(elements, (num) => {
    if (Array.isArray(num)) {
      outPut = outPut.concat(flatten(num));
    } else {
      outPut.push(num);
    }
  });
  return outPut;
};

const myarr = [1, [2], [3, [[4]]]];
console.log(flatten(myarr)); // --> [1, 2, 3, 4]
/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};

// each(['Force Awakens', 'Last Jedi', 'A New Hope'], (movie, index) => {
//   console.log(`The movie ${movie}, is found at index ${index}`);
// });

// each(['Jumper', 'Americana', 'Hey Jude'], (song, index) => {
//   console.log(`The song ${song} is found at index ${index}`);
// });

// const myNumbers = [1, 2, 3, 4];
// const summedNumsByTen = myNumbers.map((num) => {
//   return num + 10;
// });

// console.log(summedNumsByTen);
// console.log(myNumbers);

// const myNewNumbers = myNumbers.slice();
// console.log(myNewNumbers);

// const productOfNums = myNumbers.reduce((prev, next) => {
//   return (prev *= next);
// }, 10);

// console.log(productOfNums);

// const myFunction = (...args) => {
//   console.log(...args);
// };

// myFunction(1, 2, 3, 4, 5);

const countDown = (num) => {
  console.log(num);
  if (num === 0) return;
  countDown(num - 1);
};

countDown(10);
