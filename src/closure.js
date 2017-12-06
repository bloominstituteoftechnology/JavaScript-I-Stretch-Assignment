// Complete the following functions.

const counter = () => {
  let nCount = 0;
  return () => {
    nCount++;
    return nCount;
  };
};

const counterFactory = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
  };
};

const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (n === count) return null;
    count++;
    return cb(...args);
  };
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  const cache = {};
  return (input) => {
    if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input];
    cache[input] = cb(input);
    return cache[input];
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
