// Complete the following functions.

const counter = () => {
  let myCount = 0;
  return () => myCount += 1;
};

// Return a function that when invoked increments and returns a counter variable.
// Example: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const counterFactory = () => {
  let count = 0;
  const functions = {
    increment: () => {
      count++;
      return counter;
    },
    decrement: () => {
      count--;
      return counter;
    },
  };  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return functions;
};
const limitFunctionCallCount = (cb, n) => {
  let i = 0;
  return (...args) => {
    i++;
    if (i <= n) {
      return cb(...args);
    }
    return null;
  };
};
// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
// should return null
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
