// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  const newCounter = () => {
    count++;
    return count;
  };
  return newCounter;
 };	




const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment () {
      count ++;
      return count
    } 
    decrement( {
      count++;
      return 0 - count;
    })
  }
  
  
  
  
  
  let nums = 0;
  let newObject = {};
  return newObject = {
    increment: () => {
      return nums += 1;
    },
    decrement: () => {
      return nums -= 1;
    },




};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = n;
  return (...args) => {
    if (count > 0) {
      --count;
      return cb(...args);
    }
    return null;




};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  function cacheFunction(cb) {
    return function (number) {
      number + number;
      return cb(number);
    }
}





};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
