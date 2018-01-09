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
  return Object.values(obj).filter(x => !(x instanceof Function));
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const newObj = {};
  const refArr = Object.entries(obj);
  refArr.forEach((elem) => {
    newObj[[elem[0]]] = cb(elem[1]);
  });
  return newObj;
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
  const newObj = {};
  const arrObj = Object.entries(obj);
  arrObj.forEach((elem) => {
    newObj[elem[1]] = elem[0];
  });
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const objArr = Object.entries(obj);
  const defArr = Object.entries(defaultProps);

  for (let i = 0; i < defArr.length; i++) {
    let checker = 0;
    for (let k = 0; k < objArr.length; k++) {
      if (defArr[i][0] === objArr[k][0]) {
        checker += 1;
      }
    }
    if (checker === 0) {
      obj[defArr[i][0]] = defArr[i][1];
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
