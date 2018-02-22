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
  const props = Object.keys(obj);
  const vals = {};
  for (let i = 0; i < props.length; i++) {
    vals[props[i]] = cb(obj[props[i]]);
  }
  return vals;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.`
  // http://underscorejs.org/#pairs
  const objKeys = Object.keys(obj);
  const objVals = Object.values(obj);
  const kvpMatrix = [];

  for (let i = 0; i < objKeys.length; i++) {
    const key = objKeys[i];
    const val = objVals[i];
    const mtx = [key, val];
    kvpMatrix.push(mtx);
  }
  return kvpMatrix;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the objKeys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const objKey = Object.keys(obj);
  const objVal = Object.values(obj);
  const invertedProps = {};

  for (let i = 0; i < objKey.length; i++) {
    invertedProps[objVal[i]] = objKey[i];
  }
  return invertedProps;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults

  const myObj = Object.assign(obj);
  const defaultKeys = Object.keys(defaultProps);

  for (let i = 0; i < defaultKeys.length; i++) {
    if (!myObj[defaultKeys[i]]) {
      myObj[defaultKeys[i]] = defaultProps[defaultKeys[i]];
    }
  }
  return myObj;
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
