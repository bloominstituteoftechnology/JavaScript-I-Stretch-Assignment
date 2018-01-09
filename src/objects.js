// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  return Object.keys(obj);
};

const values = (obj) => {
  return Object.keys(obj).map(key => obj[key]);
};

const mapObject = (obj, cb) => {
  const newObj = {};
  Object.keys(obj).forEach(key => newObj[key] = cb(obj[key]));
  return newObj;
};

const pairs = (obj) => {
  return Object.keys(obj).map(key => [key, obj[key]]);
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach(key => newObj[obj[key]] = key);
  return newObj;
};

const defaults = (obj, defaultProps) => {
  Object.keys(defaultProps).forEach((key) => {
    if (obj[key] === undefined) {
      obj[key] = defaultProps[key];
    }
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
