

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const newArr = [];
  each(elements, (item, index) => {
    newArr.push(cb(item, index));
  });
  return newArr;
};

const reduce = (elements, cb, startingValue) => {
  const newElements = elements.slice();
  if (startingValue === undefined) {
    startingValue = newElements.shift();
  }
  let memo = startingValue;
  each(newElements, (el) => {
    memo = cb(memo, el);
  });
  return memo;
};


const find = (elements, cb) => {
  let result;
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      result = elements[i];
    } else {
      result = undefined;
    }
  }
  return result;
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
  let outPut = [];
  each(elements, (num) => {
    if (Array.isArray(num)) {
      outPut = outPut.concat(flatten(num));
    } else {
      outPut.push(num);
    }
  });
  return outPut;
};

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
