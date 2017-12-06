// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  return Object.keys(obj);
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
};

const values = (obj) => {
  return Object.values(obj);
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
};

const mapObject = (obj, cb) => {
  const newOb = {};
  const ObKeys = Object.keys(obj);
  const ObVal = Object.values(obj);
  for (let i = 0; i < ObKeys.length; i++) {
    newOb[ObKeys[i]] = cb(ObVal[i]);
  }
  return newOb;
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
};

const pairs = (obj) => {
  const pairArr = [];
  const ObKeys = Object.keys(obj);
  const ObVal = Object.values(obj);
  for (let i = 0; i < ObKeys.length; i++) {
    pairArr.push([ObKeys[i], ObVal[i]]);
  }
  return pairArr;

  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  const newOb = {};
  const ObVal = Object.keys(obj);
  const ObKeys = Object.values(obj);
  for (let i = 0; i < ObKeys.length; i++) {
    newOb[ObKeys[i]] = ObVal[i];
  }
  return newOb;
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  const dPK = Object.keys(defaultProps);
  const dPV = Object.values(defaultProps);
  for (let i = 0; i < dPK.length; i++) {
    if (!(dPK[i] in obj)) obj[dPK[i]] = dPV[i];
  }
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
