// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
    return Object.keys(obj); 
    
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
};

const values = (obj) => {
  return Object.values(obj);// Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
};

const mapObject = (obj, cb) => {
 /* for ( let i = 0; i < Object.keys(obj).length; i++) {
    obj[key[i]] = cb(obj[key[i]]);
  }// Like map for arrays, but for objects. Transform the value of each property in turn.
  return obj;// http://underscorejs.org/#mapObject
}; */  
  Object.keys(obj).forEach(key => (obj[key] = cb(obj[key])));
  return obj;  
};  

const pairs = (obj) => {
  return Object.entries(obj);// Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
 // dream world - return values(keys) switched into keys(values).join('');
    const keyArr = keys(obj);
    const valArr = values(obj);
    const newObj = {};
    for ( let i = 0; i < keyArr.length; i++) {
      newObj[valArr[i]] = keyArr[i];
    }
    return newObj;
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  const defaultKeys = keys(defaultProps);
  for (let i = 0; i < defaultKeys.length; i++) {
    if (obj[defaultKeys[i]] === undefined) {
      obj[defaultKeys[i]] = defaultProps[defaultKeys[i]];
    }
  } return obj;// Fill in undefined properties that match properties on the `defaultProps` parameter object.
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
