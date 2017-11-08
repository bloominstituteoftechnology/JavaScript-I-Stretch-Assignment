// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj);
};

const values = (obj) => {
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
    // Like map for arrays, but for objects. Transform the value of each property in turn.
    // http://underscorejs.org/#mapObject
  const mapped = {};

  const myKeys = Object.keys(obj);
  for (let i = 0; i < myKeys.length; i++) {
    mapped[myKeys[i]] = cb(obj[myKeys[i]]);
  }
  return mapped;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return Object.keys(obj).map((key) => {
    return [key, obj[key]];
  });
};

/* STRETCH PROBLEMS */
const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const inverted = {};

  const keyPair = Object.keys(obj);
  for (let i = 0; i < keyPair.length; i++) {
    inverted[obj[keyPair[i]]] = keyPair[i];
  }

  return inverted;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  Object.keys(defaultProps).forEach((key) => {
    obj[key] = obj[key] || defaultProps[key];
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
