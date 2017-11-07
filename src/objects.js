// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  const keyList = Array();
  for (const prop in obj) {
  keyList.push(prop);
}
  return keyList;
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
};

const values = (obj) => {
  const valueList = Array();
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
	  valueList.push(obj[prop]);
}
  }
  return valueList;
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
};

const mapObject = (obj, cb) => {
  const newObj = obj;
  for (const prop in newObj) {
	  newObj[prop] = cb(obj[prop]);
  }
  return newObj;
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
};

const pairs = (obj) => {
  const pairList = Array();
  let keyVal = Array(2);
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
	  keyVal = [prop, obj[prop]];
	  pairList.push(keyVal);
}
  } return pairList;
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  const invertedObj = {};
  for (const prop in obj) {
	  invertedObj[obj[prop]] = prop;
  }
  return invertedObj;
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  const newObj = {};
  const listOfKeys = Object.keys(defaultProps);
  for (let i = 0; i < listOfKeys.length; i++) {
    if (obj[listOfKeys[i]] === undefined || !obj.hasOwnProperty(listOfKeys[i])) {
      newObj[listOfKeys[i]] = defaultProps[listOfKeys[i]];
    } else {
      newObj[listOfKeys[i]] = obj[listOfKeys[i]];
    }
  }
  return newObj;
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
};

/* eslint-enable no-unused-lets */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
