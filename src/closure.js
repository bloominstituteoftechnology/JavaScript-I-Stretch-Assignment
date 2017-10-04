// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let num = 0;
  return () => { return num = 1 + num; };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let num = 0;
  return {
    increment: () => { return num += 1; },
    decrement: () => { return num -= 1; },
  };
};


const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // No idea how arg or ... works
  let num = 0;
  return (...args) => {
    num += 1;
    if (num <= n) return cb(...args);
    return null;
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
  return (arg) => {
    const cacheKeys = Object.keys(cache);
    let keyExists = false;
    for (let i = 0; i < cacheKeys.length; i++) {
      if (cacheKeys[i] === arg.toString()) {
        keyExists = true;
        return cache[cacheKeys[i]];
      }
    }
    if (!keyExists) {
      cache[arg] = cb(arg);
      return cache[arg];
    }
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
