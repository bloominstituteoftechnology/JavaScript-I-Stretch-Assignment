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
<<<<<<< HEAD
  const mapKeys = Object.entries(obj);
  const mapVals = Object.values(obj);
  const newMapObj = {};
  for (let i = 0; i < mapKeys.length; i++) {
    newMapObj[mapKeys[i]] = cb(mapVals[i]);
  }
  return newMapObj;
=======
  const newObj = {};
  // const keyArr = keys(obj);
  // const ValueArr = values(obj).map(cb);

  keys(obj).forEach((key, index) => newObj[key] = cb(obj[key]));

  return newObj;
>>>>>>> 58769d4b28f88b5f90727dcd11ca918aec9deb9d
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
<<<<<<< HEAD
  const myEntries = Object.entries(obj);
  return myEntries;
=======
  return Object.entries(obj);
>>>>>>> 58769d4b28f88b5f90727dcd11ca918aec9deb9d
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObj = {};
  pairs(obj).forEach(item => newObj[item[1]] = item[0]);
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const newObj = defaultProps;
  keys(obj).forEach(key => newObj[key] = obj[key]);
  return newObj;
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
