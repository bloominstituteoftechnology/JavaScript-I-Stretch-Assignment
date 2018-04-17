'use strict'

function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  function increment () {
    return ++counter;;
  }
  function decrement () {
    return --counter;
  }
  return {
    increment,
    decrement
  }
}
console.log(counterFactory().increment());
console.log(counterFactory().decrement());



function cb () { console.log("Callback invoked") };
function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
  let counter = n;
  function invoke () {
  //  counter-- >  0 ? cb() : throw(new Error (`Callback already called ${n}-times`));  I CAN NOT FIGURE OUT WHY THIS LINE IS NO WORKING
   counter-- >  0 ? cb() : console.log(`Callback already called ${n}-times`);
  }
  return {invoke};
}
let nTimes = limitFunctionCallCount(cb, 3);
nTimes.invoke();
nTimes.invoke();
nTimes.invoke();
nTimes.invoke();


cb = x => `Good! argument ${x} was no used!`
// console.log(cb(1));
function cacheFunction(cb) {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = new Set();

  function invoke ( param ) {
    if (!cache.has(param)) {
      console.log(cache);
      cache.add(param);
      return cb(param);
    } 
    else {
      console.log(cache);
      return cache;
    }
  } 
  return {invoke};
}
let argumentUsed = cacheFunction(cb);
console.log(argumentUsed.invoke("x"));
console.log(argumentUsed.invoke("x"));