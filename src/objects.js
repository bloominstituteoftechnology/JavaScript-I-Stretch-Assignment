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
 // Declare a const variable putting object.keys into it.
  const newObjKeys = Object.keys(obj);
  // declare a const of for the new obj
  const mappedObj = {};
  for (let i = 0; i < newObjKeys.length; i++) {
  // set mappedObj at the newObjKeys variable of the index of i equal to the object
  // and passed into cb at the newObjKeys index of i
    mappedObj[newObjKeys[i]] = cb(obj[newObjKeys[i]]);
  }
  // return the newly mapped object
  return mappedObj;
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

  Array.prototype.reverse.call(obj);

  return obj;
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
