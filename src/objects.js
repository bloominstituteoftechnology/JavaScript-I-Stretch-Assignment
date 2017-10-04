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
  const arr = Object.keys(obj);
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[i] = obj[arr[i]];
  }
  return temp;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const newObj = {};
  for (let i = 0; i < values(obj).length; i++) {
    newObj[Object.keys(obj)[i]] = cb(values(obj)[i]);
  }
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const arr = [];
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const temp = [];
    temp.push(keys(obj)[i]);
    temp.push(values(obj)[i]);
    arr.push(temp);
  }

  return arr;
};

/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const temp = {};
  for (let i = 0; i < Object.keys(obj).length; i++) {
    temp[values(obj)[i]] = keys(obj)[i];
  }

  return temp;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  for (let i = 0; i < Object.keys(defaultProps).length; i++) {
    if (!obj[keys(defaultProps)[i]]) {
      obj[keys(defaultProps)[i]] = values(defaultProps)[i];
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
