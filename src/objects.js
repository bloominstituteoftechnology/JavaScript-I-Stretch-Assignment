// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const arrVal = [];
  Object.keys(obj).forEach((key) => {
    arrVal.push((obj[key]));
  });
  return arrVal;
};

const mapObject = (obj, cb) => {
  Object.keys(obj).forEach((key) => {
    obj[key] = cb(obj[key]);
  });
  return obj;
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const arrayPair = [];
  const arrayValues = [];
  const arrayKeys = Object.keys(obj);
  Object.keys(obj).forEach(key => arrayValues.push(obj[key]));

  arrayKeys.forEach((key, i) => {
    const acumArr = [];
    acumArr.push(arrayKeys[i]);
    acumArr.push(arrayValues[i]);
    arrayPair.push(acumArr);
  });
  return arrayPair;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const objCopy = {};
  Object.keys(obj).forEach((key, index) => objCopy[obj[key]] = key);
  return objCopy;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  Object.keys(defaultProps).forEach((key) => {
    if (!hasOwnProperty.call(obj, key)) {
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
