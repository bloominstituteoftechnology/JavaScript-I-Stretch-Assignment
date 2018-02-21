// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  let arr = [];
  arr = Object.keys(obj);
  return arr;
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
  const mappedKeys = Object.keys(obj);
  const mappedValues = Object.values(obj);

  const newMap = {};
  for (let i = 0; i < mappedKeys.length; i++) {
    newMap[mappedKeys[i]] = cb(mappedValues[i]);
  }
  return newMap;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const newArr = [];
  const objKeys = Object.keys(obj);
  const objValues = Object.values(obj);
  for (let i = 0; i < objKeys.length; i++) {
    newArr.push([objKeys[i], objValues[i]]);
  }
  return newArr;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObj = {};
  const mappedKeys = Object.keys(obj);
  const mappedValues = Object.values(obj);
  for (let i = 0; i < mappedKeys.length; i++) {
    newObj[mappedValues[i]] = mappedKeys[i];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const keyList = Object.keys(obj);
  const valuesList = Object.values(obj);
  const defKeys = Object.keys(defaultProps);
  const defValues = Object.values(defaultProps);

  for (let i = 0; i < defKeys.length; i++) {
    if (keyList[i] === defKeys[i] && valuesList[i] === undefined) {
      obj[keyList[i]] = defValues[i];
    }
    if (!keyList.includes(defKeys[i])) {
      obj[defKeys[i]] = defValues[i];
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
