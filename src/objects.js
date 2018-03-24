// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const objValues = [];
  for (let i in obj) {
    objValues.push(obj[i].toString());
  }
  return objValues;
};
// console.log(keys({a:1,b:2,c:3,d:4,e:5,f:6}));

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
   const propertys = [];
   Object.keys(obj).forEach(key => propertys.push(obj[key]));
   return propertys;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
  const valuesArr = {};
  Object.keys(obj).forEach(x => { valuesArr[x] = cb(obj[x]) });
  return valuesArr;

};
// console.log(mapObject({a:1, b:2, c:3, d:4}, (val) => { return val * val; }));

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const objProperties = [];
  for (let i in obj) {
    objProperties.push(i.toString(), obj[i].toString());
  }
  return objProperties;
};
console.log(pairs({a:1,b:2,c:3,d:4,e:5}));
/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const keyValueInvert = {};
  for (let i in obj) {
    keyValueInvert[obj[i]] = i;
  }
  return keyValueInvert;
};

// console.log(invert({a:1,b:2,c:3,d:4}));

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
