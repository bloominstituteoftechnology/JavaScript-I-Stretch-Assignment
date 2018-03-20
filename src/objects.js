// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  let newArray = [];
  newArray = Object.keys(obj);
  return newArray;
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  let newArray = [];
  newArray = Object.values(obj);
  return newArray;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  let newArray = [];
  newArray = Object.keys(obj);
  for (let i = 0; i < newArray.length; i++) {
    obj[newArray[i]] = cb(obj[newArray[i]]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  let newArray = [];
  newArray = Object.entries(obj);
  return newArray;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  let newArray = [];
  newArray = Object.entries(obj);
  for (let i = 0; i < newArray.length; i++) {
    newArray[i].reverse();
  }
  const newObj = {};
  for (let i = 0; i < newArray.length; i++) {
    newObj[newArray[i][0]] = newArray[i][1];
  }
  return newObj;
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
