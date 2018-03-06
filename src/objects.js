// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const keyArray = [];
  Object.keys(obj).forEach((key) => {
    keyArray.push(key);
  });
  return keyArray;
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
  keys(obj).forEach((key) => {
    obj[key] = cb(obj[key]);
  });
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const list = [];
  keys(obj).forEach((key) => {
    const pair = [];
    pair.push(key);
    pair.push(obj[key]);
    list.push(pair);
  });
  return list;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const invertedObject = {};
  keys(obj).forEach((key) => {
    const keyHolder = key;
    const valueHolder = obj[key];
    invertedObject[valueHolder] = keyHolder;
  });
  return invertedObject;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  keys(defaultProps).forEach((key) => {
    if (obj[key] === undefined) {
      keys(defaultProps).forEach((defaultKey) => {
        if (defaultKey === key) obj[key] = defaultProps[defaultKey];
      });
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
