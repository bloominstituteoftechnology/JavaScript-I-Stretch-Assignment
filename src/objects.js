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
  const objKeys = Object.keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    obj[objKeys[i]] = cb(obj[objKeys[i]]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const objKeys = Object.keys(obj);
  const objVals = Object.values(obj);
  const pairArr = objKeys.map((item) => {
    return [item, objVals[objKeys.indexOf(item)]];
  });
  return pairArr;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  // return Object.assign(defaultProps, obj);
  const objKeys = Object.keys(obj);
  const objVals = Object.values(obj);
  for (let i = 0; i < objKeys.length; i++) {
    obj[objVals[i]] = objKeys[i];
    delete obj[objKeys[i]];
  }
  return obj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defKeys = Object.keys(defaultProps);
  const defVals = Object.values(defaultProps);
  const objKeys = Object.keys(obj);
  const objVals = Object.values(obj);
  for (let i = 0; i < defVals.length; i++) {
    if (!obj[defKeys[i]]) obj[defKeys[i]] = defVals[i];
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
  defaults
};
