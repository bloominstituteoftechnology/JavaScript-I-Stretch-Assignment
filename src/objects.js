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
  const result = [];
  const props = Object.keys(obj);
  for (let i = 0, leng = props.length; i < leng; i++) {
    if (typeof props[i] !== 'function') {
      result.push(obj[props[i]]);
    }
  }
  return result;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const result = {};
  const props = Object.keys(obj);
  for (let i = 0, leng = props.length; i < leng; i++) {
    result[props[i]] = cb(obj[props[i]]);
  }
  return result;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const result = [];
  const props = Object.keys(obj);
  for (let i = 0, leng = props.length; i < leng; i++) {
    result.push([props[i], obj[props[i]]]);
  }
  return result;
};

/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const result = {};
  const props = Object.keys(obj);
  for (let i = 0, leng = props.length; i < leng; i++) {
    result[obj[props[i]]] = props[i];
  }
  return result;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  // const props = Object.keys(defaultProps);
  // const objProps = Object.keys(obj);
  // for (let i = 0, leng = props.length; i < leng; i++) {
  //   if (objProps.indexOf(props[i]) === -1) {
  //     obj[props[i]] = defaultProps[props[i]];
  //   }
  // }
  // return obj;
  const defProps = Object.keys(defaultProps);
  defProps.forEach((item) => {
    if (!(item in obj)) {
      obj[item] = defaultProps[item];
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
