// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  // console.log('Names: ' + Object.getOwnPropertyNames(obj));
  return Object.keys(obj).toString();
};
/*
const testObject = {a: 'asdf', b: 'bnm.', f1: () => {console.log('f1');}}
console.log('testObject keys: '+ keys(testObject));
console.log('String keys: '+ keys(String));
console.log('Array keys: '+ keys(Array));
*/

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const arr = [];
  const len = Object.values(obj).length;
  let i = 0;

  for (; i < len; i++) {
    if (typeof Object.values(obj)[i] !== 'function') {
      arr.push(Object.values(obj)[i]);
    }
  }
  return arr;
};
/*
const testObject = {a: 'asdf', b: 'bnm.', f1: () => {console.log('f1');}}

console.log('testObject values: '+ values(testObject));
console.log('String values: '+ values(String));
console.log('Array values: '+ values(Array));
*/

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const len = Object.values(obj).length;
  let i = 0;
  for (; i < len; i++) {
    if (typeof Object.keys(obj)[i] !== 'undefined') {
      Object.keys(obj)[i] = cb(Object.keys(obj)[i]);
    }
    // console.log(Object.keys(obj)[i]);
  }
  return Object.values(obj);
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

  const pairArr = [];

  const len = Object.values(obj).length;
  let i = 0;

  for (; i < len; i++) {
    if (typeof Object.keys(obj)[i] !== 'undefined') {
      pairArr.push([]);
      pairArr[i].push(Object.keys(obj)[i]);
    }
    if (i === 0) {
      pairArr[i][i + 1] = Object.values(obj)[i];
    } else {
      pairArr[i][i] = Object.values(obj)[i];
    }
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
