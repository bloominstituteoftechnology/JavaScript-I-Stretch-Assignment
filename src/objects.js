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
  const keyList = Object.keys(obj);
  for (let i = 0; i < keyList.length; i++) {
    obj[keyList[i]] = cb(obj[keyList[i]]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const kvArray = [];
  const keyList = Object.keys(obj);
  for (let i = 0; i < keyList.length; i++) {
    kvArray.push([keyList[i], obj[keyList[i]]]);
  }
  return kvArray;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObj = {};
  const keyList = Object.keys(obj);
  const valList = Object.values(obj);
  for (let i = 0; i < keyList.length; i++) {
    newObj[valList[i]] = keyList[i];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const keyList = Object.keys(defaultProps);
  const valList = Object.values(defaultProps);
  for (let i = 0; i < keyList.length; i++) {
    if (obj[keyList[i]] === undefined) {
      obj[keyList[i]] = valList[i];
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
