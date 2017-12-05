// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  let count = 0;
  return () => ++count;
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
  };
};

const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (n === count) return null;
    count++;
    return cb(...args);
  };
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};

// craft me your best example of closure.

// write a function that returns the call to another function.
// the nested function should print some string.
// const age = 31;
// // const printage = () => {
// //   console.log(age);
// // };

// function greetFunc() {
//   const greetStr = `Ryan is ${age} years old`;
//   function innerFunc() {
//     return greetStr;
//   }
//   return innerFunc();
// }

// console.log(greetFunc());

// const myFunction = (x, y) => 1 + 2;

// const myObj = {
//   name: 'Ryan',
//   age: 31,
//   occupation: 'VSCode Evangelist',
// };

// const { ...myObj } = myObj;
// console.log(myObj);
