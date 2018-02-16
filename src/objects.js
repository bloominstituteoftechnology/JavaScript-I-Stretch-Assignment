// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  const newArray = [];
  Object.keys(obj).forEach((key, index) => {
    newArray[index] = key;
  });
  return newArray;
};

const values = (obj) => {
  return Object.keys(obj).map((key) => {
    return obj[key];
  });
};

const mapObject = (obj, cb) => {
  const newObject = {};
  Object.keys(obj).forEach((key) => {
    newObject[key] = cb(obj[key]);
  });
  return newObject;
};

const pairs = (obj) => {
  const newArray = [];
  Object.keys(obj).forEach((key, index) => {
    newArray[index] = [key, obj[key]];
  });
  return newArray;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  Object.keys(obj).forEach((key) => {
    const newKey = obj[key];
    obj[newKey] = key;
    delete obj[key];
  });
  return obj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  Object.keys(defaultProps).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return;
    obj[key] = defaultProps[key];
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
