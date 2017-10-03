// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let timesCalled = 0;
  return () => ++timesCalled;
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let increment = 0;
  let decrement = 0;
  return {
    increment: () => ++increment,
    decrement: () => --decrement,
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  /*********************************************************************
   * I fail the third test "should properly handle arguments in the 
   * wrapped function"
   * I've done all I can to understand the issue and posted my question
   * several time in cs4_help and no one has responded
   * I'm submitting the assignment in hopes that I'll receive some 
   * feedback from someone
   *********************************************************************/
  let callLimit = 0;
  return () => {
    if (callLimit >= n) {
      return null;
    }
    callLimit++;
    return cb();
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
  let arg;
  let cache;
  return (x) => {
    if (arg === x) {
      return cache;
    }
    arg = x;
    cache = cb(x);
    return cache;
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
