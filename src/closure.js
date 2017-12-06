const counter = () => {
  let countNum = 0;
  return () => {
    countNum++;
    return countNum;
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
    if (count === n) {
      return null;
    }
    count++;
    return cb(...args);
  };
};

const cacheFunction = (cb) => {
  const cache = {};
  return (args) => {
    if (Object.prototype.hasOwnProperty.call(cache, args)) {
      return cache[args];
    }
    cache[args] = cb(args);
    return cache[args];
  };
};

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
