// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  return Object.keys(obj);
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
};

const values = (obj) => {
  const valArr = [];
  Object.keys(obj).forEach((key) => {
    valArr.push((obj[key]));
  });
  return valArr;
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
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
  const keyArr = Object.keys(obj);
  const valArr = [];

  Object.keys(obj).forEach((key) => {
    valArr.push((obj[key]));
  });

  const pairArr = [];
  for (let i = 0; i < valArr.length; i++) {
    const tempArr = [];
    tempArr.push(keyArr[i]);
    tempArr.push(valArr[i]);
    pairArr.push(tempArr);
  }

  return pairArr;
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  const keyArr = Object.keys(obj);
  const valArr = [];
  const obj2 = {};

  Object.keys(obj).forEach((key) => {
    valArr.push((obj[key]));
  });

  for (let i = 0; i < keyArr.length; i++) {
    const key = keyArr[i];
    const value = valArr[i];
    obj2[value] = key;
  }
  return obj2;
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
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
function newFunction() {
  return 5;
}

