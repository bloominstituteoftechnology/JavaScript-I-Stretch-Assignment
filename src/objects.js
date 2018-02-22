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
  const output = {};
  Object.keys(obj).forEach(x => output[x] = cb(obj[x]));
  return output;
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

  const a = Object.keys(obj);
  const b = Object.values(obj);
  const output = {};
  for (let i = 0; i < a.length; i++) {
    output[obj[a[i]]] = a[i];
  }
  return output;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const initialProps = Object.keys(obj);
  const propsToFill = Object.keys(defaultProps);
  let match = false;
  for (let i = 0; i < propsToFill.length; i++) {
    for (let j = 0; j < initialProps.length; j++) {
      if (propsToFill[i] === initialProps[j]) match = true;
    }
    if (!match) obj[propsToFill[i]] = defaultProps[propsToFill[i]];
    match = false;
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
