// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  return Object.keys(obj);
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
};

const values = (obj) => {
  return Object.values(obj);
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
};

const mapObject = (obj, cb) => {
  const newObj = {};
  const key = Object.keys(obj);
  for (let i = 0; i < key.length; i++) {
    newObj[key[i]] = cb(obj[key[i]]);
  }
  return newObj;
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
};

const pairs = (obj) => {
  return Object.entries(obj);
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  const newObj = {};
  const els = Object.entries(obj);
  for (let i = 0; i < els.length; i++) {
    newObj[els[i][1]] = els[i][0];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  return Object.assign(defaultProps, obj);
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
