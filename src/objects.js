// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const arr = [];
  Object.keys(obj).forEach(item => arr.push(item));
  return arr;
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const arr = [];
  Object.values(obj).forEach(item => arr.push(item));
  return arr;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const final = {};
  Object.keys(obj).forEach(val => final[val] = (cb(obj[val])));
  return final;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const final = [];
  Object.keys(obj).forEach(val => final.push([val, obj[val]]));
  return final;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const final = {};
  Object.keys(obj).forEach(val => final[obj[val]] = val);
  return final;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  Object.keys(defaultProps).forEach((val) => {
    if (!(val in obj)) {
      obj[val] = defaultProps[val];
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
