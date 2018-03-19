/*
  Complete the following functions.
  These functions only need to work with arrays.
  A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
  The idea here is to recreate the functions from scratch BUT if you'd like,
  feel free to Re-use any of your functions you build within your other functions.
  You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
  You can use the functions that you have already written to help solve the other problems
*/

//setting up an array as a const
const eleArray = [3,6,8,5,4];
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
  
  
  //why!?
// the  arrow function, set to each
const each = (elements, cb) =>  {
  // for itereating over eleArray. 
for (let index = 0; index < eleArray.length; index++) {
  //pushing the array element and the array index into cb
 cb(elements[i], i)
  };
};

//Invoking each with the eleArray
each(eleArray);

// arrow function set as map
const map = (elements, cb) => {
  // Do NOT use .map, to complete this function.
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  

  // setting up ourArray as a const 
  const ourArray = []
  //iterating over elements 
  for (let index = 0; index < elements.length; index++) {
    //pushing into ourArray the element at index i
    ourArray.push(elements[i])
  }
  //returning our new pushed array
  return ourArray
};

// stting up reduce arrow function
const reduce = (elements, cb, startingValue) => {

  // Do NOT use .reduce, to complete this function.
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
  

  // setting a const of starWars to the starting value
  const starWars = startingValue;
  // initializing total as 0
  let total = 0;
  //Iterating over the elements array
  for (let index = 0; index < elements.length; index++) {
    // total equals total plus the current element at the index of i
    total += elements[i];
  }
  // if the starting value(starWars) is undefined.
  if (startingValue === undefined) {
    // push in the element at the index of 0 and the total
    cb(elements[0], total);
  }
  // if the starting value(starWars) is defined then push that and the total
  cb(starWars, total)
};
 // using find as an arrow function
const find = (elements, cb) => {

  // Do NOT use .includes, to complete this function.
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.

  for (let index = 0; index < elements.length; index++) {
    // if cb at the element index of i = true.
    if(cb(elements[i]) === true) {
      // then return element at the index of i
      return elements[i]
    }
  }
  // if element at the index of i is equal to false then return undefined
   return undefined;
};

const filter = (elements, cb) => {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  
  // set a const that is an array to the variable of filteredArray 
  const filteredArray =[];

  for (let index = 0; index < elements.length; index++) {
    // if cb at the element index of i = true
    if(cb(elements[i]) === true) {

      // push the element at the index of i, into the filteredArray
       filteredArray.push(elements[i]);
    }
// return the new filteredArray
return filteredArray;

  }


};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

  
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
