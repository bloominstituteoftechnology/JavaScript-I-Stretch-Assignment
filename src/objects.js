// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

// obj = {a:b, c:d}
const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj); // [a,c]
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const arr = [];
  const vals = Object.keys(obj); // [a,c]
  vals.forEach((item) => {
    if (typeof item !== 'function') {
      arr.push(obj[item]); // arr = [b,d]
    }
  });
  return arr;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const newObj = {};
  const val = Object.keys(obj); // [a,c]
  val.forEach((item) => {
    newObj[item] = cb(obj[item]); // adds modified value
  });
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  // obj -> [["keyName",val],["keyName",val]]
  // for each pairing in object, make an array and push them into array
  const resultArr = [];
  const keyList = Object.keys(obj); // ["keyName",...]
  keyList.forEach((key) => { // for keys a & c
    resultArr.push([key, obj[key]]); // adds ["keyName", value]
  });
  return resultArr; // [ ["keyName", value],... ]
};

/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  // obj = {a:b, c:d} -> resultObj = {b:a, d:c}
  const resultObj = {}; // will be {b:a, d:c}
  const keyArr = Object.keys(obj); // [a,c]
  keyArr.forEach((item) => {
    resultObj[obj[item]] = item;
  });
  return resultObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  // obj = {a?, c:25}  def = {a:b, c:d}
  const defKeyArr = Object.keys(defaultProps);
  //
  defKeyArr.forEach((item) => {
    if (!(item in obj)) { // if no def key in obj
      obj[item] = defaultProps[item];
      // sets obj prop & value to def prop & value
    }
  });
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
