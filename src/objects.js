// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
const each = require('./arrays.js').each;

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj);
};
function isFunction(func) {
  return (typeof func === 'function');
}
const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const r = [];
  each(keys(obj), (key) => {
    if (!isFunction(obj[key])) {
      r.push(obj[key]);
    }
  });
  return r;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const r = {};
  each(keys(obj), (key) => {
    r[key] = cb(obj[key]);
  });
  return r;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const r = [];
  each(keys(obj), (key) => {
    r.push([key, obj[key]]);
  });
  return r;
};

/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const r = {};
  each(keys(obj), (key) => {
    r[obj[key]] = key;
  });
  return r;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  each(keys(defaultProps), (key) => {
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
