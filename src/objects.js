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
  const mapKeys = Object.keys(obj);
  const mapValues = Object.values(obj);

  const map = {};
  for (let i = 0; i < mapKeys.length; i++) {
    map[mapKeys[i]] = cb(mapValues[i]);
  }
  return map;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const pairsArray = [];
  const objKeys = Object.keys(obj);
  const objValues = Object.values(obj);
  for (let i = 0; i < objKeys.length; i++) {
    pairsArray.push([objKeys[i], objValues[i]]);
  }
  return pairsArray;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const mapKeys = Object.keys(obj);
  const mapValues = Object.values(obj);

  const map = {};
  for (let i = 0; i < mapKeys.length; i++) {
    map[mapValues[i]] = mapKeys[i];
  }
  return map;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defaultKeys = Object.keys(defaultProps);
  const defaultValues = Object.values(defaultProps);

  for (let i = 0; i < defaultKeys.length; i++) {
    if (!(defaultKeys[i] in obj)) {
      obj[defaultKeys[i]] = defaultValues[i];
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
