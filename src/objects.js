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
  const valArr = [];
  const keyArr = (keys(obj));
  for (let i = 0; i < keyArr.length; i++) {
    valArr.push(obj[keyArr[i]]);
  }
  return valArr;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const keyArr = (keys(obj));
  const newObj = {};
  for (let i = 0; i < keyArr.length; i++) {
    newObj[keyArr[i]] = (cb(obj[keyArr[i]]));
  }
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const keyArr = (keys(obj));
  const pairArr = [];
  for (let i = 0; i < keyArr.length; i++) {
    const newKey = [keyArr[i]];
    const newProp = [obj[keyArr[i]]];
    pairArr[i] = newKey.concat(newProp);
  }
  return pairArr;
};


/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const keyArr = Object.keys(defaultProps);
  for (let i = 0; i < keyArr.length; i++) {
    if (defaultProps.keyArr[i] !== obj.keyArr[i]) {
      obj.keyArr[i] = defaultProps.keyArr[i];
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
