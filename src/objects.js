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
  const objectKeys = Object.keys(obj);
  for (let i = 0; i < objectKeys.length; i++) {
    obj[objectKeys[i]] = cb(obj[objectKeys[i]]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const newArray = [];
  const objectKeys = Object.keys(obj);
  const objectValues = Object.values(obj);
  for (let x = 0; x < objectKeys.length; x++) {
    newArray.push([objectKeys[x], objectValues[x]]);
    //  pair.push(objKeys[i], objValues[i]);
    //  arrOfPairs.push(pair);
    //  pair = [];
    //  [ ['string1, 'string2']]
  }
  return newArray;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObject = {};
  const objectKeys = Object.keys(obj);
  const objectValues = Object.values(obj);
  for (let i = 0; i < objectKeys.length; i++) {
    newObject[objectValues[i]] = objectKeys[i];
  }
  return newObject;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defaultKeys = Object.keys(defaultProps);
  const defaultValues = Object.values(defaultProps);
  const objKey = Object.keys(obj);
  for (let i = 0; i < defaultKeys.length; i++) {
    if (obj[defaultKeys[i]] === undefined) {
      obj[defaultKeys[i]] = defaultValues[i];
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
