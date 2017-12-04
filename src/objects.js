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
  const newOb = {};

  for (let i = 0; i < keys(obj).length; i++) {
    newOb[keys(obj)[i]] = cb(values(obj)[i]);
  }
  return newOb;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const arr = [];
  for (let i = 0; i < keys(obj).length; i++) {
    arr.push([keys(obj)[i], values(obj)[i]]);
  }
  return arr;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newOb = {};
  for (let i = 0; i < keys(obj).length; i++) {
    newOb[values(obj)[i]] = keys(obj)[i];
  }
  return newOb;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const objKey = Object.keys(defaultProps);
  for (let i = 0; i < objKey.length; i++) {
    if (!obj[objKey[i]]) {
      obj[objKey[i]] = defaultProps[objKey[i]];
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
