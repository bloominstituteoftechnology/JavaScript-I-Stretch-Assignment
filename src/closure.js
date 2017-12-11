// Complete the following functions.
CLOSURES

const counter = () => {
 
const counter = (function(n) {
  return function() {
    n += 1;
    return n;
  }
}(0)); 

};

const counterFactory = () => {
    let count = 0;
 const counterObj = {};
  counterObj.increment = () => {
    count += 1;
};
}

const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  const cbAgain = () => {
    if (count < n) {
      cb();
      count++;
    }
  };
  return cbAgain;
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
