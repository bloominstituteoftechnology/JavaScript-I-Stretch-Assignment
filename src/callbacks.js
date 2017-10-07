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

const firstItem = (foods, firstItem) => {
  firstItem (foods.shift());
}

const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

firstItem(foods, (firstItem) => {
  console.log(`The first item is ${firstItem}.`);
});

// Write a function called getLength that passes the length of the array into the callback
// code here

const getLength = ( foods, length) =>{
  length(foods.length);
}

getLength(foods, (length) => {
  console.log(`The length of the array is ${length}.`);
});

// Write a function called last which passes the last item of the array into the callback
// code here

 const last = (foods, lastItem) => {
   lastItem(foods.pop());
 }

last(foods, (lastItem) => {
  console.log(`The last item in the array is ${lastItem}.`);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback
// code here
const sumNums = ( x, y , sum) => {
   sum (x + y);
  // return sum;
}

sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
// code here

const multiplyNums = (x, y, product) => { product(x * y);}
   
multiplyNums(5, 10, (product) => {
  console.log(`The product is ${product}.`);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
// code here
const contains = (foods, item, result) => {
  for (let i=0; i < foods.length; i++)
  {
      if ( foods[i] === item ){ result (true); } 
  }
  result (false);
};

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
// code here
const removeDuplicates = (foods, uniqueFoods) => {
  //let duplicateFoods = foods[0]; 
  //just check the first item then give the rest of the array
  for (let i=0; i < foods.length; i++)
  {
    let duplicateFoods = foods[i];
      if ( foods[i] === duplicateFoods )
      { foods.pop(); } 
  }
  uniqueFoods(foods);
};

removeDuplicates(foods, (uniqueFoods) => {
  console.log(`foods with duplicates removed: ${uniqueFoods}`);
});



// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.
// code here
const forEach = ( foods, cb ) => { 
  for ( let i = 0; i < foods.length; i++ ) // step though each item pass back to callback
  {
    cb (foods[i], i);
  }
 };

forEach(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});

/* eslint-enable */
