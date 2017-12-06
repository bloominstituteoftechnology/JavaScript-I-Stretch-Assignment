// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
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
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
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

// const hi = 'hello';
// const say = () => {
//   console.log(hi);
// };
// const dosome = () => {
//   say();
// };
// dosome();
