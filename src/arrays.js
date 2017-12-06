const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const newArray = [];
  each(elements, (item, index) => {
    newArray.push(cb(item, index));
  });
  return newArray;
};

const reduce = (elements, cb, startingValue) => {
  const elementsCopy = elements;
  let sum = startingValue;
  if (startingValue === undefined) {
    sum = elementsCopy.shift();
  }
  for (let i = 0; i < elementsCopy.length; i++) {
    sum = cb(sum, elementsCopy[i]);
  }
  return sum;
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
  return undefined;
};

const filter = (elements, cb) => {
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      newArr.push(elements[i]);
    }
  }
  return newArr;
};

const flatten = (elements) => {
  const newArr = reduce(elements, (memo, item) => {
    if (Array.isArray(item)) {
      return memo.concat(flatten(item));
    }
    return memo.concat(item);
  }, []);
  return newArr;
};

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
