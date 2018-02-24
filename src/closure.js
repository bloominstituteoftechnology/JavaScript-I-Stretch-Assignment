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
  return (...args) => (count === n ? null : ++count && cb(...args));
};

const cacheFunction = (cb) => {
  const cache = {};
  return arg => (arg in cache ? cache[arg] : cache[arg] = cb(arg));
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
