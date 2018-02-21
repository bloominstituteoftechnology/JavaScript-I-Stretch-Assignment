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
  const newCounter = {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  };
  return newCounter;
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // let numInvoked = 0;
  // return () => {
  //   numInvoked++;
  //   if (numInvoked > n) return;
  //   cb();
  //   return;
  // };
  let limit = 0;
  const limitedCall = (...arg) => {
    // creates a new function with unlimited args
    let memo = cb(...arg); // setting memo/ans to be returned
    if (limit === n) {
      // check if limit hit
      memo = null; // change memo to null
    } else {
      limit += 1; // increment counter
    }
    return memo; // return memo
  };
  return limitedCall; // return inner function
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  const cacheCall = (arg) => {
    let ans = null;
    if (arg in cache) {
      ans = cache[arg];
    } else {
      ans = cb(arg);
      cache[arg] = ans;
    }
    return ans;
  };
  return cacheCall;
};

// const foo = x => x * x;
// const cachedFunction = cacheFunction(foo);
// console.log(cachedFunction(5));

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
