// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const newArray = [];
  Object.keys(obj).forEach((key) => {
    newArray.push(key);
  });

  return newArray;
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const newArray = [];
  Object.keys(obj).forEach((key) => {
    newArray.push(obj[key]);
  });
  return newArray;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  Object.keys(obj).forEach((key) => {
    obj[key] = cb(obj[key]);
  });
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const newArray = [];
  Object.keys(obj).forEach((key) => {
    const newArray2 = [key, obj[key]];
    newArray.push(newArray2);
  });
  return newArray;
};

/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObject = {};

  // Temporary variable to store the value of the original key
  let tempStore = null;
  Object.keys(obj).forEach((key) => {
    tempStore = key;
    key = obj[key];
    obj[key] = tempStore;
    // Storing the new key and value pairs into a new object similar to pushing individual items into arrays.
    newObject[key] = obj[key];
  });
  return newObject;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults

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
