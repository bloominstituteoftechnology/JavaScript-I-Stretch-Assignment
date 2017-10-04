// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const properties = [];
  Object.keys(obj).forEach((key) => {
    properties.push(key);
  });

  return properties;
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const vals = [];
  Object.keys(obj).forEach((key) => {
    vals.push(obj[key]);
  });

  return vals;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const newVals = {};
  Object.keys(obj).forEach((key) => {
    newVals[key] = cb(obj[key]);
  });

  return newVals;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const paired = [];
  Object.keys(obj).forEach((key) => {
    paired.push([key, obj[key]]);
  });

  return paired;
};

/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const invertedObj = {};
  const originalKey = keys(obj);
  const originalVals = values(obj);

  for (let i = 0; i < originalVals.length; i++) {
    invertedObj[originalVals[i]] = originalKey[i];
  }

  return invertedObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  Object.keys(defaultProps).forEach((key) => {
    if (key in obj === false) {
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
