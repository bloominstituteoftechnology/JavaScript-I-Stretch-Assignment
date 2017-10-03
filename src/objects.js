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
  return Object.keys(obj).filter(key => !(typeof obj[key] === 'function')).map(key => obj[key]);
};

const mapObject = (obj, cb, onlyValues = true) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  // Added an onlyValues param, that you can set to false, if you want to execute callback on said function.

  return Object.keys(obj).reduce((transformedObj, key) => {
    transformedObj[key] = (onlyValues && obj[key] === 'function') ? obj[key] : cb(obj[key]);
    return transformedObj;
  }, {});
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return Object.keys(obj).map(key => [key, obj[key]]);
};

/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  return Object.keys(obj).reduce((transformedObj, key) => {
    const value = obj[key];
    transformedObj[value] = key;
    return transformedObj;
  }, {});
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  // return { ...defaultProps, ...obj };

  return Object.keys(defaultProps).reduce((transformedObj, key) => {
    transformedObj[key] = key in obj ? obj[key] : defaultProps[key];
    return transformedObj;
  }, obj);
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
