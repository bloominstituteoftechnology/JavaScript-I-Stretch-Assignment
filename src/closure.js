// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let localCounter = 0;
  return () => {
    return ++localCounter;
  };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let closureCounter = 0;
  const increment = () => {
    return ++closureCounter;
  };
  const decrement = () => {
    return --closureCounter;
  };
  return {
    increment,
    decrement,
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let times = 0;
  return (...args) => {
    if (++times <= n) {
      return cb(...args);
    }
    return null;
  };
};

/* Extra Credit */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  return (...args) => {
    let result;
    if (!(args.toString() in cache)) {
      result = cb(...args);
      cache[args.toString()] = result;
    } else {
      result = cache[args.toString()];
    }
    return result;
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
