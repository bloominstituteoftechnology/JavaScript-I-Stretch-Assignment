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
  const objVal = {};
  const objEntry = Object.entries(obj);  // [[a: 1], [b: 2], [c: 3]]
  for (let i = 0; i < objEntry.length; i++) {
    objEntry[i][1] = cb(objEntry[i][1]);
    // newObj.objEntry[i] = objEntry[i][1];
  }
  // magic to turn our nested arrays into objects
  objEntry.forEach((a) => {
    let p = objVal;
    const v = a.pop();
    const k = a.reduce((r, b) => {
      p[r] = p[r] || {};
      p = p[r];
      return b;
    });
    p[k] = v;
  });
  return objVal;
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
