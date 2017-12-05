// Complete the following functions.

const counter = () => {
  
  let count = 0;
  return () => {
    return count += 1;
  };
};

const counterFactory = () => {
  
  let count = 0;
  return {
    increment: () => {
      return count += 1;
    },
    decrement: () => {
      return count -= 1;
    },
  };
};

const limitFunctionCallCount = (cb, n) => {
  
  let count = 0;
  return (...args) => {
    if (n === count) return null;
    count += 1;
    return cb(...args);
  };
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  
  const newObj = {};
  return (item) => {
    if (newObj[item] === undefined) {
      newObj[item] = cb;
      return newObj[item](item);
    }
    return newObj[item];
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
