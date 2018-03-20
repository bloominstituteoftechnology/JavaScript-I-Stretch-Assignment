// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  // output: an array containing the properties of obj
  return Object.keys(obj);
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  // output: an array containing the values of obj
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const props = Object.keys(obj);
  for (let i = 0; i < keys; i++) {
    // pass all properties in obj into cb
    cb(props[i]);
  }
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  // output: list of key : value pairs in obj
  return Object.entries(obj);
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  // method #1: use a loop
  // let result = {}; // holds the inverted key value pairs
  // let keys = Object.keys(obj);
  // let vals = Object.values(obj);
  // // iterate over obj's keys
  // for (let key of keys) {
  //   // set props in result to be values of obj
  //   // values of result will be the properties of obj
  //   result[obj[key]] = key;
  // }
  // return result;
  // method #2: use array.reduce()
  return Object.keys(obj).reduce((a, b) => {
    // initial value of a is {}
    // set each of obj's keys to a property in a
    a[obj[b]] = b;
    // a accumulates inverted key:value pairs
    return a;
  }, {});
  // output: an object with obj's keys as values and obj's values as properties
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
