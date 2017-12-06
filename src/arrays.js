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
  if (startingValue === undefined) {
    startingValue = elements[0];
    for (let i = 1; i < elements.length; i++) {
      startingValue = cb(startingValue, elements[i]);
    }
  } else {
    for (let i = 0; i < elements.length; i++) {
      startingValue = cb(startingValue, elements[i]);
    }
  }
  return startingValue;
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
};

const filter = (elements, cb) => {
  const foundArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      foundArray.push(elements[i]);
    }
  }
  return foundArray;
};

const flatten = (elements) => {
  if (!Array.isArray(elements)) {
    return elements;
  }
  if (elements.length === 1) {
    if (!Array.isArray(elements[0])) {
      return elements[0];
    }
    return flatten(elements[0]);
  }
  return [flatten(elements[0])].concat(flatten(elements.slice(1)));
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
