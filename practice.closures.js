const counter = () => {
  let count = 1;
  let increment = function() {
    return ++count;
  }
  return increment;
}

const counterFactory = () => {
  let count = 1;
  let methods = {
    function increment() {
      return ++count;
    }
    function decrement() {
      return --count;
    }
  };
  return methods;
}

const limitFunctionCallCount(cb, n) {
  
}
