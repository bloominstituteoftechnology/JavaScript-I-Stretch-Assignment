// Completed everything except for stretch. Will come back to later!

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  return Object.getOwnPropertyNames(obj);
};

const values = (obj) => {
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  const objKeys = Object.keys(obj);
  const objValues = Object.values(obj);

  for (let i = 0; i < objKeys.length; i++) {
    obj[objKeys[i]] = cb(objValues[i]);
  }

  return obj;
};

const pairs = (obj) => {
  return Object.entries(obj);
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert

  // TODO: Try this later while keeping Kaitlyn's method in mind.
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults

  // TODO: Do this to make your prototype sense stronger.
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
