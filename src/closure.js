// Complete the following functions.

const counter = () => {
  let currentCount = 0;
return function () {
  return ++currentCount;
};
  // Return a function that when invoked increments and returns a counter letiable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
};

const counterFactory = () => {
  let count = 0;
  const counterObject = {};
  counterObject.count = 0;
  counterObject.increment = function () {
      return ++count;
    };
  counterObject.decrement = function () {
      return --count;
    };
  return counterObject;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter letiable in closure scope and return it.
  // `decrement` should decrement the counter letiable and return it.
};

const limitFunctionCallCount = (cb, n) => {
  let callCount = 0;
  return (...args) => {
    callCount++;
    if (callCount <= n) {
      return cb(...args);
    }
  return null;
  };
  return funcCall;
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  const cacheObject = {
    cachedArgs: [],
    results: [],
  };
  return (args) => {
    for (let i = 0; i < cacheObject.cachedArgs.length; i++) {
      if (cacheObject.cachedArgs.includes(args)) {
        return cacheObject.results[cacheObject.cachedArgs.indexOf(args)];
      }
    }
    cacheObject.results.push(cb(args));
    cacheObject.cachedArgs.push(args);
    return cacheObject.results[cacheObject.results.length - 1];
  };
};
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

/* eslint-enable no-unused-lets */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
