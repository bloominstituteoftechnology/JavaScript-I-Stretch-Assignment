// Complete the following functions.
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 1;
  return () => {
    return count++;
  };
};
/*
const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
*/

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let num = 0;

  const increment = () => {
    return num++;
  };
  const decrement = () => {
    return num--;
  };

  return {

    increment: () => {
      return increment();
    },

    decrement: () => {
      return decrement();
    },
  };
};
/*
const cFactory = counterFactory();
 
console.log(cFactory.increment());
console.log(cFactory.increment());
console.log(cFactory.decrement());
console.log(cFactory.decrement());
*/

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let calls = 0;

  return (...args) => {
    if (calls < args[1]) {
      calls++;
      return args[0](...args);
    } return null;
  };
};
/*
const limitCall = limitFunctionCallCount();
 
limitCall(() => {console.log('Call')}, 1);
limitCall(() => {console.log('Call')}, 1);
limitCall(() => {console.log('Call')}, 1);
limitCall(() => {console.log('Call')}, 1);
*/

/* Extra Credit */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

  const cache = {
    cacheArgs: [],
  };

  return (...args) => {
    const L = cache.cacheArgs.length;
    for (let i = 0; i <= L; i++) {
      if (cache.cacheArgs[i]) {
        if (cache.cacheArgs[i].toString() === args[0].toString()) {
          console.log('CACHED:');
          return cache.cacheArgs[i](...args);
        }
      }
    }
    console.log('NEW:');
    cache.cacheArgs.push(args[0]);
    return args[0](...args);
  };
};

/*
const cacheCall = cacheFunction();
cacheCall(() => {console.log('Call')});
cacheCall(() => {console.log('Call')});
cacheCall(() => {console.log('?')});
cacheCall(() => {console.log('?')});
cacheCall(() => {console.log('Call')});
*/

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
