// Complete the following functions.

const nFibonacci = (n) => {
  const arr = [1, 2];
  for (let i = 0; i < n; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr[n - 1];
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
