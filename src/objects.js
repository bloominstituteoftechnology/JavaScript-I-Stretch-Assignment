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
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
  const objKeys = Object.keys(obj);
  const mappedObj = {};
  for (let i = 0; i < objKeys.length; i++) {
    mappedObj[objKeys[i]] = cb(obj[objKeys[i]]);
  }
  return mappedObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return Object.entries(obj);
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const reverseClone = {};
  const objEntries = Object.entries(obj);
  for (let i = 0; i < objEntries.length; i++) {
    reverseClone[objEntries[i][1]] = objEntries[i][0];
  }
  return reverseClone;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defaultKeys = Object.keys(defaultProps);
  for (let i = 0; i < defaultKeys.length; i++) {
    if (typeof obj[defaultKeys[i]] === 'undefined') {
      obj[defaultKeys[i]] = defaultProps[defaultKeys[i]];
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
