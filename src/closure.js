// Complete the following functions.

const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const counterFactory = () => {
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
const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (count >= n) {
      return null;
    }++count;
    return cb(...args);
  };
};
/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  const cacheObj = {};
  return (...args) => {
    const key = args;
    if (!(key in cacheObj)) {
      const newVal = cb(...args);
      cacheObj[key] = newVal;
      return newVal;
    }
    return cacheObj.key;
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
