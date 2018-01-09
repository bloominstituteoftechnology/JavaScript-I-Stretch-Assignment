// Complete the following functions.

const counter = () => {
  let total = 0;
  return () => ++total;
};

const counterFactory = () => {
  let total = 0;
  return {
    increment: () => ++total,
    decrement: () => --total,
  };
};

const limitFunctionCallCount = (cb, n) => {
  let timesInvoked = 0;
  return (...args) => {
    if (timesInvoked >= n) return null;
    timesInvoked++;
    return cb(...args);
  };
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  const cache = [];
  return (...args) => {
    if (cache.filter(argList => JSON.stringify(argList) ===
      JSON.stringify(args)).length === 0) {
      cache.push(args);
      return cb(args);
    }
    return null;
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
