// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/*    ************ NOTE TO EVALUATORS *******************
Given time, I'd like to find a way to use Object.entries
and iterate over the resulting
2-D Array to find keys, values
I like objects as much as Ryan likes arrays :D
See: https://repl.it/@wj68yz/Troy-Bradley-ScratchPad-for-Lambda-JS-I-Objects
and https://repl.it/@wj68yz/Troy-Bradley-More-Scratching-at-forEach-in-JS-I-Objects
*/

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.getOwnPropertyNames(obj);
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
  Object.keys(obj).forEach(key => (obj[key] = cb(obj[key])));
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  // flatten (Object.entries(obj)); ???
  return Object.entries(obj);
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
//   const flip = {};
//   for (const key in obj) {     // try to find a way to use forEach
//     flip[obj[key]] = key;
//   }
//  return flip;
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
