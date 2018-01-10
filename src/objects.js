// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  const props = Object.keys(obj);
  return props;
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
};

const values = (obj) => {
  const valOfProp = Object.values(obj);
  return valOfProp;
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
};

const mapObject = (obj, cb) => {
  Object.keys(obj).forEach(key => (obj[key] = cb(obj[key])));
  return obj;
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
};

const pairs = (obj) => {
  const result = [];
  // Object.keys(obj).forEach(key => (result.push[key, obj[key]]));
  Object.keys(obj).forEach((key) => {
    const pair = [key, obj[key]];
    result.push(pair);
  });
  return result;
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[obj[key]] = key;
  });
  return newObj;
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  Object.keys(defaultProps).forEach((key) => {
    if (obj[key] === undefined) {
      obj[key] = defaultProps[key];
    }
  });
  return obj;
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
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
