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
  const mappedObj = {}; // mappedObj is set to an empty object
  Object.keys(obj).forEach((key) => { // iterate over they keys on the object passed in by obj
    mappedObj[key] = cb(obj[key]); // map the keys to the values held in the cb
  });
  return mappedObj; // return
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return Object.entries(obj);
};

/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  //
  // this one I'll need to return to, I'm not understanding something here
  //
  Object.keys(obj).forEach((key) => { // for each key in the obj
    const value = obj[key]; // set a value variable to the key
    obj[value] = key; // set the value to the key
    delete obj[key]; // delete the original key
  });
  return obj; // return the object
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  Object.keys(defaultProps).forEach((key) => { // for each key in the defalutProps object
    if (Object.prototype.hasOwnProperty.call(obj, key)) return; // if it has it's own property, assign the object and key -> return
    obj[key] = defaultProps[key]; // otherwise set the key to the value in defaultProps
  });
  return obj; // return the object
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
