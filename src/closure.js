// Complete the following functions.
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  // this has to be made outside of the returned function
  let incrementor = 0;
  return () => ++incrementor;
};

const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {
    count: 0,
    increment() {
      return ++this.count;
    },
    decrement() {
      return --this.count;
    }
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  const max = n;
  let cur = 0;
  // function is variable arity
  return (...args) => (cur++ >= max ? null : cb(...args));
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  const addToCache = obj => Object.assign(cache, obj);

  // property names cannot be numbers
  const isInCache = key => Object.keys(cache).includes(key.toString());

  const handleAddToCache = (k) => {
    const obj = {};
    obj[k] = cb(k);
    addToCache(obj);
    return obj[k];
  };

  return k => (isInCache(k) ? cache[k] : handleAddToCache(k));
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount
};
