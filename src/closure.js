// Complete the following functions.

const counter = () => {
  let count = 0;
  return () => {
    return count += 1;
  };
};
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => {
      return count += 1;
    },
    decrement: () => {
      return count -= 1;
    }
  };
};

const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.

  let limit = 0; // sets a counter
  const limitedCall = (...arg) => { // creates a new function with unlimited args
    let memo = cb(...arg); // setting memo/ans to be returned
    if (limit === n) { // check if limit hit
      memo = null; // change memo to null
    } else {
      limit += 1; // incremet counter
    }
    return memo; // return memo
  };
  return limitedCall; // return inner function
};

// const limitFunctionCallCount = (cb, n) => {
//   // Should return a function that invokes `cb`.
//   // The returned function should only allow `cb` to be invoked `n` times.
//   let callCount = 0;

//   const limitCall = (...args) => {
//     if (callCount < n) {
//       callCount += 1;
//       return cb();
//     }
//   };
//   return limitCall();
// };


/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.


  // const cacheFunction = (cb) => {
  //   const cache = [];
  //   const cacheCall = (...arg) => {
  //     const memo = {
  //       input: args,
  //       output: cb('...arg')
  //     };
  //     cache.forEach((res) => {
  //       if (res.input === memo.input) {
  //         return res.output;
  //       } if (res.input !== memo.input) {
  //         cache.push(memo);
  //         return memo.output;
  //       }
  //     });
  //   };
  //   return cacheCall;

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

  // const cache = [];

  // const cacheCall = (...arg) => {
  //   let memo = cb(...arg);
  //   for (let i = 0; i < cache.length; i++) {
  //     if (cache[i] === memo) {
  //       memo = null;
  //       return cache[i];
  //     } if (cache[i] !== memo) {
  //       cache.push(memo);
  //     }
  //   }
  //   return memo;
  // };
  // return cacheCall;
};
// console.log(cacheFunction(1, 2, 3, 4, 5));

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
