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

  const keysArr = keys(obj);
  const valsArr = values(obj);

  for (let i = 0; i < keysArr.length; i++) {
    obj[keysArr[i]] = cb(valsArr[i]);
  }

  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

  const resultArr = [];
  const keysArr = keys(obj);
  const valsArr = values(obj);

  for (let i = 0; i < keysArr.length; i++) {
    resultArr[i] = [keysArr[i], valsArr[i]];
  }

  return resultArr;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert

  // Create new object to return
  const newObj = {};
  // Loop through obj and for each pair insert them into newObj in reverse order
  Object.entries(obj).forEach(pair => newObj[pair[1]] = pair[0]);
  // return newly reversed object
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults

  // Create copy of obj to manipulate
  const returnObj = Object.assign({}, obj);
  // Create variable for quick reference
  const defProps = keys(defaultProps);

  // Loop through keys of defaultProps and compare to keys of returnObj
  for (let i = 0; i < defProps.length; i++) {
    if (!keys(returnObj).includes(defProps[i])) { // If no matching key is found
      // Add key and value to returnObj
      returnObj[defProps[i]] = defaultProps[defProps[i]];
    }
  }

  // Return obj with newly added defaults
  return returnObj;
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
