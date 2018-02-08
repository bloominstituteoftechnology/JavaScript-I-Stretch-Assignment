// Complete the following functions.

const counter = () => {
  let count = 0;
  return () => ++count;
};

const counterFactory = () => {
  let fCounter = 0;
  return {
    increment() {
      return ++fCounter;
    },
    decrement() {
      return --fCounter;
    },
  };
};

const limitFunctionCallCount = (cb, n) => {
  return () => {
    for (let i = 0; i <= n; i++) {
      return cb();
    }
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
  return () => {
    cb();
    let cacheCounter = 0;
    const cacheObj = {
      increment: ++cacheCounter,
      args: cb(),
    };
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
