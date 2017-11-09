// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  return Object.keys(obj).slice();
  // Based on http://underscorejs.org/#keys
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

  const nObj = {};
  const oKeys = keys(obj);

  for (let i = 0; i < oKeys.length; i++) {
    const setKey = oKeys[i];
    nObj[setKey] = cb(obj[setKey]);
  }

  return nObj();
};


const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

  const objKey = Object.keys(obj);

  const pairArr = [];

  for (let i = 0; i < objKey.length; i++) {
    pairArr.push([objKey, obj[objKey]]);
  }

  return pairArr;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert

  let newObj;
  const objKey = Object.keys(obj);

  for (let i = 0; i < objKey.length; i++) {
    newObj[obj[i]] = obj[i];
  }

  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const objKeys = Object.keys(defaultProps);

  for (let i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] === undefined) {
      obj[objKeys[i]] = defaultProps[objKeys[i]];
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
