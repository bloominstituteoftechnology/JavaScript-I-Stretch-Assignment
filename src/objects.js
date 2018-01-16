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
  const newObj = {};
  const key = Object.keys(obj); // now i have an array of all keys
  for (let i = 0; i < key.length; i++) { // loop over array of keys
    const newVal = cb(obj[key[i]]);  // create newVal to be each key of obj passed through the callback
    newObj[key[i]] = newVal; // set each key in newObj to each key of obj passed through the callback
  }
  return newObj;  // return newObj
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
  const newObj = {};
  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    newObj[entries[i][1]] = entries[i][0];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults

  return Object.assign(defaultProps, obj); // smashes together two object, the one on the right being what gets overwritten.
  // will take defaultProps keys if undefined, otherwise doesn't touch
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
