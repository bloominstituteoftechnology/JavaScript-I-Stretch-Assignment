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
  const result = [];
  const allKeys = keys(obj);

  for (let i = 0; i < allKeys.length; i++) {
    if (typeof obj[allKeys[i]] !== 'function') {
      result.push(obj[allKeys[i]]);
    }
  }

  return result;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const allKeys = keys(obj);

  for (let i = 0; i < allKeys.length; i++) {
    obj[allKeys[i]] = cb(obj[allKeys[i]]);
  }

  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const result = [];
  const allKeys = keys(obj);

  for (let i = 0; i < allKeys.length; i++) {
    result.push([allKeys[i], obj[allKeys[i]]]);
  }

  return result;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const daPairs = Object.entries(obj);
  const result = {};

  daPairs.forEach((pair) => {
    result[pair[1]] = pair[0];
  });

  return result;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  const defKeys = Object.keys(defaultProps);

  defKeys.forEach((key) => {
    if (obj[key] === undefined) {
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
