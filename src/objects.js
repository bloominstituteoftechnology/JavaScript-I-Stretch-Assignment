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
  const result = {};
  const pairing = Object.entries(obj);
  for (let i = 0; i < pairing.length; i++) {
    result[pairing[i][0]] = cb(pairing[i][1]);
  }
  return result;
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
  const pairings = Object.entries(obj);
  const result = {};
  for (let i = 0; i < pairings.length; i++) {
    result[pairings[i][1]] = pairings[i][0];
  }
  return result;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const ogObj = Object.entries(obj);
  const defaultEntries = Object.entries(defaultProps);
  const ogKeys = Object.keys(obj);

  for (let i = 0; i < defaultEntries.length; i++) {
    if (!(ogObj.includes(defaultEntries[i]))) {
      if (!(ogKeys.includes(defaultEntries[i][0]))) {
        obj[defaultEntries[i][0]] = defaultEntries[i][1];
      }
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
