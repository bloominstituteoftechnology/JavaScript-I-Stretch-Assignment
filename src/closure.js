// Complete the following functions.

const counter = () => {
  let value = 0;
  return () => {
    return ++value;
  };
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
};

const counterFactory = () => {
  let value = 0;
  return {
    increment: () => {
      return ++value;
    },
    decrement: () => {
      return --value;
    }
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const limitFunctionCallCount = (cb, n) => {
  let value = 0;
  return (...args) => {
    if (value < n) {
      value++;
      return cb(...args);
    }
    if (value === n) return null;
  };
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  const cache = {};
  return (par1) => {
    if (cache[par1] !== undefined) {
      return cache[par1];
    }
    if (cache[par1] === undefined) {
      cache[par1] = cb(par1);
      return cb(par1);
    }
  };
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
