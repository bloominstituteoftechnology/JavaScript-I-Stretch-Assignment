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
  for (let i = 0; i <= Object.keys(obj).length - 1; i++) {
    obj[Object.keys(obj)[i]] = cb(Object.values(obj)[i], Object.keys(obj)[i]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const returnPairs = [];
  for (let i = 0; i <= Object.values(obj).length - 1; i++) {
    returnPairs.push([Object.keys(obj)[i], Object.values(obj)[i]]);
  }
  return returnPairs;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const returnObj = {};
  for (let i = 0; i <= Object.values(obj).length - 1; i++) {
    returnObj[Object.values(obj)[i]] = Object.keys(obj)[i];
  }
  return returnObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  for (let i = 0; i <= Object.keys(defaultProps).length - 1; i++) {
    if (obj[Object.keys(defaultProps)[i]] === undefined) {
      obj[Object.keys(defaultProps)[i]] = defaultProps[Object.keys(defaultProps)[i]];
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
