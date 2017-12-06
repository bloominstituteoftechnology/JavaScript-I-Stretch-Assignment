// Complete the following functions.

const counter = () => {  /* CHECK */
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const counterFactory = () => {  /* CHECK */
  let count = 0;
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
  };
};

const limitFunctionCallCount = (cb, n) => {  /* CHECK */
  let count = 0;
  return (...rest) => {
    if (count === n) return null;
    count++;
    return cb(...rest);
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
