// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // initialize a counter to 0
  let count = 0;
  function newCounter() {
  // newCounter increments count by 1 at every function call
    count++;
    // count is updated and sent to counter scope
    return count;
  }
  newCounter(); // 1
  newCounter(); // 2
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  // initialize a counter to 0
  let count = 0;
  // calculate obj holds increment and decrement functions
  const calculate = {
    increment() {
    // add 1 to count
      count++;
      return count;
    },
    decrement() {
    // subtract 1 from count
      count--;
      return count;
    }
  };
  calculate.increment();
  calculate.decrement();
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  function limit() {
  // while n is greater than 0 invoke cb
    while (n > 0) {
      cb();
      n--;
    }
  }
  return limit(cb);
};

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
