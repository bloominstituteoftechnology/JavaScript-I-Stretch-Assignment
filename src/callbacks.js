/* eslint-disable */

/*  For a portion of the assignment your job is to write functions
 *  so that each function invocation below works.  You're working backwards.
 *
 *  There are no tests for this file.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *
 *  const greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */

// Write a function called firstItem that passes the first item of the given array to the callback function
// code here
const firstItem = (elements,cb) => {
  return cb(elements[0]);
}
const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

firstItem(foods, (firstItem) => {
  console.log(`The first item is ${firstItem}.`);
});

// Write a function called getLength that passes the length of the array into the callback
// code here
const getLength = (elements, cb) => {
  return cb(elements.length);
}
getLength(foods, (length) => {
  console.log(`The length of the array is ${length}.`);
});

// Write a function called last which passes the last item of the array into the callback
// code here
const last = (elements, cb) => {
  return cb(elements.pop);
}
last(foods, (lastItem) => {
  console.log(`The last item in the array is ${lastItem}.`);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback
// code here
const sumNums = (x, y, cb) => {
  return cb(x + y);
}
sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
// code here
const multiplyNums = (x, y, cb) => {
  return cb(x * y);
}
multiplyNums(5, 10, (product) => {
  console.log(`The product is ${product}.`);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
// code here
const contains = (elements, check, cb) => {
  for (let i = 0; i < elements.length; i++){
    if(elements[i] === check){
      return cb(true);
    }
  }
}
contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
// code here
const removeDuplicates = (elements, cb) => {
  const arr = [];
  for (let i = 0; i < elements.length; i++){
    for (let j = 1; j < elements.length; j++){
      if (elements[j] === elements[i]){
        arr.push(elements[j])
      }
    }
  }return arr;
}
removeDuplicates(foods, (uniqueFoods) => {
  console.log(`foods with duplicates removed: ${uniqueFoods}`);
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.
// code here
const forEach = (elements, value, index) => {
  for (let i=0; i < elements.length; i++){
    if (elements[i] === value){
      return cb(value, i);
    }
  }
}
forEach(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});

/* eslint-enable */
