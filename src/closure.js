// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let x = 0;
  return () => {
    return x += 1;
  };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let x = 0;
  return {
    increment: () => {
      return x += 1;
    },
    decrement: () => {
      return x -= 1;
    },
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...args) => {
    count += 1;
    if (count > n) return null;
    return cb(...args);
  };
};

/* Extra Credit */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  return (...args) => {
    const cacheKey = args.toString();
    if (!(cacheKey in cache)) {
      cache[cacheKey] = cb(...args);
    }
    return cache[cacheKey];
  };
  // I can't take any credit for this solution because Christian Franco solved it this way
  // and I can't think about any other approach. I tried .hasOwnProperty() instead of "in"
  // and I wasn't sure about args.toString() method because null, undefined and [] will be equal same empty space in quotes
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
