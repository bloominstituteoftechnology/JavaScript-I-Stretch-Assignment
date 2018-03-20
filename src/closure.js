// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 1;
  return function () { return count++; };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  const counterObj = {
    count: 0,
  };
  counterObj.increment = function () {
    return ++counterObj.count;
  };
  counterObj.decrement = function () {
    return --counterObj.count;
  };

  return counterObj;
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // let count = 0;
  const wrappedFunc = () => {
    // count += 1;
    // if (count < n) return cb(...args);
  };
  return null;
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  let storedValue = null;
  let storedResult = null;
  return function (newValue) {
    if (storedValue !== newValue) {
      storedResult = cb(newValue);
      storedValue = newValue;
      return storedResult;
    }
    storedValue = newValue;
    return storedResult;
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
