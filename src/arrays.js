const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]));
  }
  return newArray;
};

const reduce = (elements, cb, startingValue) => {
  const newElements = elements.slice();
  if (!startingValue) {
    startingValue = newElements.shift();
  }
  let memo = startingValue;
  each(newElements, (el) => {
    memo = cb(memo, el);
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
    if (cb(elements[i])) {
      newArr.push(elements[i]);
    }
  }
  return newArr;
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
  const newArr = [];
  Object.values(elements).forEach((e) => {
    if (typeof e === 'number') {
      newArr.push(e);
    } else if (typeof e === 'object') {
      if (!isNaN(Number(e))) {
        newArr.push(Number(e));
      } else if (isNaN(Number(e))) {
        Object.values(e).forEach((i) => {
          if (typeof i === 'number') {
            newArr.push(i);
          } else if (typeof i === 'object') {
            Object.values(i).forEach((j) => {
              if (!isNaN(Number(j))) {
                newArr.push(Number(j));
              }
            });
          }
        });
      }
    }
  });
  return newArr;
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
