// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  return Object.keys(obj);
};

const values = (obj) => {
  return Object.values(obj);
};

// Stuggled with mapObject
const mapObject = (obj, cb) => {
  const newObj = {};
  const keyList = Object.keys(obj);
  const valueList = Object.values(obj);

  for (let i = 0; i < Object.keys(obj).length; i++) {
    newObj[keyList[i]] = cb(valueList[i]);
  }
  return newObj;
};


const pairs = (obj) => {
  return Object.entries(obj);
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  const newObj = {};
  for (let i = 0; i < Object.keys(obj).length; i++) {
    newObj[Object.values(obj)[i]] = Object.keys(obj)[i];
  }
  return newObj;
};

// Struggled with defaults ** Run with Python Tutor
const defaults = (obj, defaultProps) => {
  Object.keys(defaultProps).forEach((key) => {
    if (!(key in obj)) obj[key] = defaultProps[key];
  });
  return obj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
