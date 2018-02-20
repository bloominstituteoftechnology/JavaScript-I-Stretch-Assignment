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
  const valuesArr = [];
  const keysArr = keys(obj);
  for (let i = 0; i < keysArr.length; i++) {
    valuesArr.push(obj[keysArr[i]]);
  }
  return valuesArr;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const keysArrMap = keys(obj);
  for (let i = 0; i < keysArrMap.length; i++) {
    obj[keysArrMap[i]] = cb(obj[keysArrMap[i]]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const keysPairs = keys(obj);
  const valuesPairs = values(obj);
  const returnArr = [];
  for (let i = 0; i < keysPairs.length; i++) {
    returnArr.push([keysPairs[i], valuesPairs[i]]);
  }
  return returnArr;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const keysInvert = keys(obj);
  const valuesInvert = values(obj);
  const returnObj = {};
  for (let i = 0; i < keysInvert.length; i++) {
    returnObj[valuesInvert[i]] = keysInvert[i];
  }
  return returnObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defaultKeys = keys(defaultProps);
  const defaultValues = values(defaultProps);
  for (let i = 0; i < defaultKeys.length; i++) {
    if (obj[defaultKeys[i]] === undefined) {
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
