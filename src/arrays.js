// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
 
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
 
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    newArr.push(cb(elements[i]));
  }
  return newArr;
};

const reduce = (elements, cb, startingValue) => {
  
  const cpElements = elements.slice();
  let memo = startingValue || cpElements.shift();
  each(cpElements, (item) => {
    memo = cb(memo, item);
  });
  return memo;
};

const find = (elements, cb) => {
  
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
};

const filter = (elements, cb) => {
  
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      newArr.push(elements[i]);
    }
  }
  return newArr;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  

  const mergeArr = (firstArr, secondArr) => {
    const merged = [];
    if (firstArr.length === 0) {
      for (let n = 0; n < secondArr.length; n++) {
        merged.push(secondArr[n]);
      }
    }

    for (let i = 0; i < firstArr.length; i++) {
      merged.push(firstArr[i]);
      if (merged.length === firstArr.length) {
        for (let n = 0; n < secondArr.length; n++) {
          merged.push(secondArr[n]);
        }
      }
    }
    return merged;
  };

  let flatArray = [];

  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      flatArray = mergeArr(flatArray, flatten(elements[i]));
    } else {
      flatArray.push(elements[i]);
    }
  }
  return flatArray;
};
/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
