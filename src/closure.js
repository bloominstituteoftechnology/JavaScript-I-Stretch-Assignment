// Complete the following functions.

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 1;  // per rules, return a counter varialbe, so create counter
  function increment() {  // per rules, return a function that increments and return count;
    return count++;
  }
  return increment;  // you don't need () because you are passing the function as a REFERENCE
  // so the code will say let count = 1, return incremented count. this line closes off access
  // so if you wanted to run code, counter() --> 1, counter() --> 2, etc
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;  // per rules, i need a counter variable
  return {  // per rules, i need to return an object
    increment: () => {  // per rules
      return ++count;  // increment FIRST, then return
    },
    decrement: () => {
      return --count;  // decrement FIRST, then return
    },
  };
};

const limitFunctionCallCount = (cb, n) => {
  let count = n;  // start at the maximum number and count down
  return (...args) => {  // rest operator for all future arugments. when i call limitFunctionCallCount
    // it's going to need to be assigned a variable. then i can pass in whatever/however many args i wanted

    if (count > 0) {
      --count;
      return cb(...args);  // spread operator basically return the whole list of all the arguments
    }
    return null;
  };
};


/* STRETCH PROBLEM */


  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
/* const cacheFunction = (cb) => {
  return (...more) => {
    const cache = {};
      return (...more) => {
      const keys = Object.keys(cache);
      const argsToString = more.toString();
      if (keys.indexOf(argsToString) !== -1) {
        return cache[argsToString];
      }
      const result = cb(...more);
      cache[argsToString] = result;
      return result;
  };
};
}; */

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  // cacheFunction,
  limitFunctionCallCount,
};
