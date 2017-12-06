// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  return Object.keys(obj);
};

const values = (obj) => {
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  const result = {};
  const objKeys = Object.keys(obj);
  const objValues = Object.values(obj);
  for (let i = 0; i < objValues.length; i++) {
    result[objKeys[i]] = cb(objValues[i]);
  }
  return result;
};

const pairs = (obj) => {
  const objkeys = Object.keys(obj);
  const objValues = Object.values(obj);
  for (let i = 0; i < objkeys.length; i++) {
    pairsArr.push([objkeys[i], objValues[i]]);
  }
  return pairsArr;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  const result = {};
  const objKeys = Object.keys(obj);
  const objValues = Object.values(obj);
  for (let i = 0; i < objKeys.length; i++) {
    result[objValues[i]] = objKeys[i];
  }
  return result;
};

const defaults = (obj, defaultProps) => {
  const defaultKeys = Object.keys(defaultProps);
  const defaultValues = Object.values(defaultProps);
  for (let i = 0; i < defaultKeys.length; i++) {
    if (!(defaultKeys[i] in obj)) {
      obj[defaultKeys[i]] = defaultValues[i];
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
