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

const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];


const firstItem = (arr, cb) => {
  cb(arr[0]);
}

firstItem(foods, (firstItem) => {
  console.log(`The first item is ${firstItem}.`);
});


// Write a function called getLength that passes the length of the array into the callback
// code here

const getLength = (arr, cb) => {
  cb(arr.length);
}

getLength(foods, (length) => {
  console.log(`The length of the array is ${length}.`);
});


// Write a function called last which passes the last item of the array into the callback
// code here

const last = (arr, cb) => {
  cb(arr[arr.length - 1]);
}

last(foods, (lastItem) => {
  console.log(`The last item in the array is ${lastItem}.`);
});


// Write a function called sumNums that adds two numbers and passes the result to the callback
// code here

const sumNums = (num1, num2, cb) => {
  cb(num1+num2);
}

sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
// code here

const multiplyNums = (num1, num2, cb) =>{
  cb(num1*num2);
}
multiplyNums(5, 10, (product) => {
  console.log(`The product is ${product}.`);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
// code here

const contains = (arr, str, cb) => {
  for (let i = 0; i <arr.length; i++) {
    if (arr[i] === str) {
      cb(true);  
      break; 
    }
    if (i === arr.length - 1) {
       cb(false);
    }
  }
}

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
// code here

const removeDuplicates = (arr, cb) => {
  let newObject = {};
  arr.forEach((val, index) => {
    if(!newObject[val]) {
      newObject[val] = 1; 
      return;
    }
    newObject[val]++;
  });

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (newObject[num] % 2 === 1) {
      newArray.push(num)
    }
  }
  cb(newArray);
} 

removeDuplicates(foods, (uniqueFoods) => {
  console.log(`foods with duplicates removed: ${uniqueFoods}`);
});



// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.
// code here
const forEach = (arr, cb) => {
  arr.forEach((val, index) => {
    cb(val, index);
  });
}

forEach(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});

/* eslint-enable */
