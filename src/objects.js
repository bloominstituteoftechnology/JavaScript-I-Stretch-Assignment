// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return (Object.keys(obj)).slice();
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const newObj = {};
  const objKeys = keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    const key = objKeys[i];
    newObj[key] = cb(obj[key]);
  }
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const keyArr = Object.keys(obj);
  const valArr = Object.values(obj);
  let newArray = [];
  const bigArray = [];
  for (let i = 0; i < keyArr.length; i++) {
    newArray.push(keyArr[i], valArr[i]);
    bigArray.push(newArray);
    newArray = [];
  }
  return bigArray;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const keyArr = Object.keys(obj);
  const valArr = Object.values(obj);
  const newObj = {};
  for (let i = 0; i < keyArr.length; i++) {
    newObj[valArr[i]] = keyArr[i];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defaultKeys = keys(defaultProps);
  for (let i = 0; i < defaultKeys.length; i++) {
    if (obj[defaultKeys[i]] === undefined) {
      obj[defaultKeys[i]] = defaultProps[defaultKeys[i]];
    }
  } return obj;
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

