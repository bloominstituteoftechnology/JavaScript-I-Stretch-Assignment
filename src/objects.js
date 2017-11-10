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
  return Object.values(obj);
};


const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const keyArr = Object.keys(obj);
  for (let i = 0; i < keyArr.length; i++) {
    obj[keyArr[i]] = cb(obj[keyArr[i]]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  // return Object.entries(obj);
  const objKeys = Object.keys(obj);
  const objValues = Object.values(obj);
  const arrOfPairs = [];
  const pair = [];
  for (let i = 0; i < objKeys.length; i++) {
    pair.push(objKeys[i], objValues[i]);
    arrOfPairs.push(pair);
    // pair = [];
  }
  // returns list of tuples
  return arrOfPairs;
};
/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const objPairs = Object.entries(obj);
  const swapArr = [];
  for (let i = 0; i < objPairs.length; i++) {
    swapArr.push(objPairs[i].reverse());
  }
  return swapArr;
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
