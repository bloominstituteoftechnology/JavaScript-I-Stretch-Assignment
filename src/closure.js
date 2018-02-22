const counter = () => {
  let count = 0;
  return () => ++count;
};

const counterFactory = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count
  };
};

const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (count === n) return null;
    count++;
    return cb(...args);
  };
};

const cacheFunction = (cb) => {
  const cache = {};
  return (arg) => {
    if (arg in cache) return cache[arg];
    cache[arg] = cb(arg);
    return cache[arg];
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
