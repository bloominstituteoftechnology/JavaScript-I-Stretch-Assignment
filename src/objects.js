// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  
  return Object.keys(obj);
};

const values = (obj) => {
  
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  
  const newOb = {};

  for (let i = 0; i < keys(obj).length; i++) {
    newOb[keys(obj)[i]] = cb(values(obj)[i]);
  }
  return newOb;
};

const pairs = (obj) => {
  
  const arr = [];
  for (let i = 0; i < keys(obj).length; i++) {
    arr.push([keys(obj)[i], values(obj)[i]]);
  }
  return arr;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  
  const newOb = {};
  for (let i = 0; i < keys(obj).length; i++) {
    newOb[values(obj)[i]] = keys(obj)[i];
  }
  return newOb;
};

const defaults = (obj, defaultProps) => {
  
  const objKey = Object.keys(defaultProps);
  for (let i = 0; i < objKey.length; i++) {
    if (!obj[objKey[i]]) {
      obj[objKey[i]] = defaultProps[objKey[i]];
    }
  }
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
