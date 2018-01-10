// Complete the following functions.

const counter = () => { // Not sure why this doesn't work.  Tried a bunch of other ways, but nothing
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return () => {
    count++;
    return count; // For the longest time I was getting an 'unreachable code' for this.  This morning I was moving things around and just cleaning out my comments, and suddenly it worked :/
  };
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count),
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...args) => {
    if (count < n) {
      count++;
      return cb(...args); // #QUESTION: In the tests, what does "shoud properly handle argements in the wrapped
    } //                  // function" mean?
    return null;
  };
};

// On '...args':  https://javascript.info/rest-parameters-spread-operator.  Still don't fully understand this.
// #QUESTION: What would be an example of achieving the SAME results the long way, instead of using rest
// parameters and spread operator?

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a function that invokes `cb`.
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
