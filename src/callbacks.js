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

const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

firstItem(foods, (firstItem) => {
  console.log(`The first item is ${firstItem}.`);
});

const firstItem = (arr, cb) => {
  cb(arr);
};

// Write a function called getLength that passes the length of the array into the callback
// code here

getLength(foods, (length) => {
  console.log(`The length of the array is ${length}.`);
});

const getLength = (arr, cb) => {
  cb(arr);
};

// Write a function called last which passes the last item of the array into the callback
// code here

last(foods, (lastItem) => {
  console.log(`The last item in the array is ${lastItem}.`);
});

const last = (arr, cb) => {
  cb(arr);
};

// Write a function called sumNums that adds two numbers and passes the result to the callback
// code here

sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

const sumNums = (x, y, cb) => {
  cb(x + y);
};

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
// code here

multiplyNums(5, 10, (product) => {
  console.log(`The product is ${product}.`);
});

const multiplyNums = (x, y, cb) => {
  cb(x * y);
}

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
// code here

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

const contains = (arr, str, cb) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === str) {
      return true;
    }
  }
  return false;
};

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
// code here

removeDuplicates(foods, (uniqueFoods) => {
  console.log(`foods with duplicates removed: ${uniqueFoods}`);
});

const removeDuplicates = (arr, cb) => {
  var temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (temp.indexOf(arr[i]) < 0) {
      temp.push(arr[i]);
    }
  }
  cb(temp);
};

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.
// code here

forEach(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});

const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};

/* eslint-enable */
