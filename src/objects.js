// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const keyList = Object.keys(obj);
  const newArr = [];
  for (let i = 0; i < keyList.length; i++) {
    newArr.push(keyList[i]);
  }
  return newArr;
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const valuesList = Object.values(obj);
  const newArr = [];
  for (let i = 0; i < valuesList.length; i++) {
    if (typeof valuesList[i] !== 'function') {
      newArr.push(valuesList[i]);
    }
  }
  return newArr;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject

  const keysList = Object.keys(obj);
  const valuesList = Object.values(obj);

  const newObj = {};
  for (let i = 0; i < keysList.length; i++) {
    newObj[keysList[i]] = cb(valuesList[i]);
  }
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  // const newArr = [];
  // for (let i = 0; i < Object.keys(obj).length; i++) {
  //   newArr.push(Object.entries(obj[i]));
  // }
  return Object.entries(obj);
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
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
