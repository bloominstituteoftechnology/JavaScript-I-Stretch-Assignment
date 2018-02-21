// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys

  return Object.keys(obj);
};

// See 'Object.keys()': https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions //
  // http://underscorejs.org/#values

  return Object.values(obj);
};

// Personal Comments - from Solution by Sean Chen:
// return Object.keys(obj).map(key => obj[key]); -- This works! It returns a string of the keys on the object, but
// then replaces all the keys with values.  This does not work for invert, as it returns an array[], not an object{}.

// #QUESTION: After 'const keys' is achieved, then .map (using a Method Chain)is used to map the string of keys back
// into properties on the object 'obj'.  Correct?

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  // Personal Comments:
  // iterate over a string of the objects keys, and replace each key with that key passed into the cb function.
  Object.keys(obj).forEach(key => (obj[key] = cb(obj[key])));
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return Object.keys(obj).map((key) => {
    return [key, obj[key]];
  });
};

/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  // Personal Comments:
  // Iterates over a string of the object's keys (Objects.keys(obj)) using forEach.  Each key
  Object.keys(obj).forEach((key) => {
    const newValue = obj[key]; // #QUESTION: Why doesn't replacing obj[key] with obj[obj[obj[key]]] work here?
    obj[newValue] = key;
    delete obj[key];
  });
  return obj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  Object.keys(defaultProps).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return;
    obj[key] = defaultProps[key];
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
