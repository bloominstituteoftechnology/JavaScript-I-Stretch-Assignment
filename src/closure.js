// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2 
  // in the parent function add a counter variable
  // make new function
  // return ++? inside function
  // return function
  let myCounter = 0;
  const myFunction = () => {
    return ++myCounter;
  }
return myFunction;
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  // create an object
  // create two methods for the object Inc and Dec
  // create a counter variable in higher scope
  // increment will increment a var 
  //   return inc
  // decrement will dec a var
  //  return dex
  // return object
  let counter = 0;
  let myObject = {
    const increment = () => {
      counter++;
      return increment;
    }
    const decrement = () => {
      counter--;
      return decrement;
    } 
        
  }
  return myObject;
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
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
