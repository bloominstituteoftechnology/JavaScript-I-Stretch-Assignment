// Complete the following functions.

const counter = () => {
  let k = 0;
  return () => {
    k++;
    return k;
  };
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
};

const counterFactory = () => {
  let k = 0;
  return {
    increment: () => { k++; return k; },
    decrement: () => { k--; return k; },
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const limitFunctionCallCount = (cb, n) => {
  let num = 0;
  return function inner(...args) {
    num++;
    if (num <= n) {
      if (arguments.length) {
        return cb(...args);
      }
      return cb();
    }
    return null;
  };
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

/* Extra Credit */

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
