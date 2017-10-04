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

const firstItem = (anArray, aCallback) => {
  aCallback(anArray[0]);
};

firstItem(foods, (firstItem) => {
  console.log(`The first item is ${firstItem}.`);
});

// Write a function called getLength that passes the length of the array into the callback
// code here

const getLength = (anArray, aCallback) => {
  aCallback(anArray.length); // I noted that using a loop would have called for either destroying a _anArray XOR using a for with .length.
};

getLength(foods, (length) => {
  console.log(`The length of the array is ${length}.`);
});

// Write a function called last which passes the last item of the array into the callback
// code here

const last = (anArray, aCallback) => {
  aCallback(anArray[anArray.length - 1]);
};

last(foods, (lastItem) => {
  console.log(`The last item in the array is ${lastItem}.`);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback
// code here

const sumNums = (aNumber, bNumber, aCallback) => {
  if ((typeof(aNumber) === 'number') && (typeof(bNumber) === 'number')) {
    aCallback(aNumber + bNumber);
  };
};

sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
// code here

const multiplyNums = (aNumber, bNumber, aCallback) => {
if ((typeof(aNumber) === 'number') && (typeof(bNumber) === 'number')) {
    aCallback(aNumber * bNumber);
  } 
}
multiplyNums(5, 10, (product) => {
  console.log(`The product is ${product}.`);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
// code here

const contains = (anArray, aString, aCallback) => {
  let _flag = [];
  for (let i = 0; i < anArray.length; i++) {
    if (anArray[i] === aString) {
      _flag.push(anArray[i]); // solution w/ accumulator
    }; // pretty straight forward
  };
  _flag.length < 1 ? aCallback(false) : aCallback(true);
};
contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
// code here

const removeDuplicates = (anArray, aCallback) => {
  const _anArray = anArray.slice(); // Lets just keep it easy, a reference is pointed without it.
  const __anArray = [];
  _anArray.sort(); // not the original array
  for (let i = 0; i < anArray.length; i++) {
    if(_anArray[i - 1 || 0] === _anArray[i]){ // evaluate if the values of the sorted array are sequential.
      __anArray.push(_anArray[i]);
    };
  };
  aCallback(__anArray);
};
removeDuplicates(foods, (uniqueFoods) => {
  console.log(`foods with duplicates removed: ${uniqueFoods}`);
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.
// code here

const forEach = (anArray, aCallback) => {
    for (let i = 0; i < anArray.length; i++) {
      aCallback(anArray[i], i);
    };
  };
forEach(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});

/* eslint-enable */
