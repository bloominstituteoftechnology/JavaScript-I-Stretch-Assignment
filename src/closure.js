// Complete the following functions.

const counter = () => {
  let count = 0;
  return () => ++count;
};

const counterFactory = () => {
  // let counts = 0;
  // return {
  //   increment: () => ++counts,
  //   decrement: () => --counts,
};

const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    // watch for n. -> "Base Case"
    if (n === count) return null; // once cb is called n amount of times, return null
    count++; // else, invoke cb() and increment counter
    return cb(...args);
  };
}; // The returned function should only allow `cb` to be invoked `n` times.

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
