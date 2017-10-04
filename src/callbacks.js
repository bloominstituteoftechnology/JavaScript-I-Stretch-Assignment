/* eslint-disable */

/*  For portion of the assignment your job is to write functions
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
function firstItem(foods, f){
  return f(foods[0]);
}

const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

firstItem(foods, (firstItem) => {
  console.log(`The first item is ${firstItem}.`);
});


// Write a function called getLength that passes the length of the array into the callback
// code here
function getLength(foods, f){
  return f(foods.length);
}

getLength(foods, (length) => {
  console.log(`The length of the array is ${length}.`);
});

// Write a function called last which passes the last item of the array into the callback
// code here
function last(foods, f){
  return f(foods[foods.length-1]);
}

last(foods, (lastItem) => {
  console.log(`The last item in the array is ${lastItem}.`);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback
// code here
function sumNums(x, y, sum){
  return sum(x + y);
}
sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
// code here
function multiplyNums(x, y, product){
  return product(x * y);
}

multiplyNums(5, 10, (product) => {
  console.log(`The product is ${product}.`);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
// code here
function contains(foods, food, f){
  for(let i = 0; i < foods.length; i++){
    if(foods[i] === food){
      // return `${food} is in the array`;
      return f(true);
    }
  }
  // return `${food} is not in the array`
  return f(false);
}

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
// code here
function removeDuplicates(foods, f){
  let count = {};
  let unique = [];
  let value;

  for(let i = 0; i < foods.length; i++){
    value = foods[i];
    count[value] = count[value] ? count[value] + 1 : 1;
    // console.log(count);
  }

  for(let j = 0; j < foods.length; j++){
    //Forced way to remove dups via use of reassignment and if-statement
    if(count[foods[j]] > 1){
      count[foods[j]] = 1;
      //Forced way to exemplify items that were removed.
      unique.push(foods[j])
    }
  }
  return f(unique);
}

removeDuplicates(foods, (uniqueFoods) => {
  console.log(`foods with duplicates removed: ${uniqueFoods}`);
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.
// code here
function forEach(arr, f){
  for(let k = 0; k < arr.length; k++){
    f(arr[k], k);
  }
}

forEach(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});

/* eslint-enable */
