// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const keysArray = [];
  const pairsArray = Object.entries(obj);
  for (let i = 0; i < pairsArray.length; i++) {
    keysArray.push(pairsArray[i][0]);
  }
  return keysArray;
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const valuesArray = [];
  const pairsArray = Object.entries(obj);
  for (let i = 0; i < pairsArray.length; i++) {
    valuesArray.push(pairsArray[i][1]);
  }
  return valuesArray;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const pairsArray = Object.entries(obj);
  for (let i = 0; i < pairsArray.length; i++) {
    obj[pairsArray[i][0]] = cb(pairsArray[i][1]);
  }
  return obj;
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
  const pairsArray = Object.entries(obj);
  const reverseObj = {};
  for (let i = 0; i < pairsArray.length; i++) {
    reverseObj[pairsArray[i][1]] = pairsArray[i][0];
  }
  return reverseObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const pairsArray = Object.entries(defaultProps);
  for (let i = 0; i < pairsArray.length; i++) {
    if (obj[pairsArray[i][0]] === undefined) {
      obj[pairsArray[i][0]] = pairsArray[i][1];
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
