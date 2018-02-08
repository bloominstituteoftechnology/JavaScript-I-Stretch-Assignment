const keys = (obj) => {
  return Object.keys(obj);
};

const values = (obj) => {
  // return Object.values(obj) best solution!
  return Object.keys(obj).map(value => obj[value]);
};

const mapObject = (obj, cb) => {
  const newObj = {};
  Object.keys(obj).map(key => newObj[key] = obj[key]);
  return cb(newObj);
};

const pairs = (obj) => {
  const newArr = [];
  Object.keys(obj).map((key, i, arr) => newArr.push([arr[i], obj[key]]));
  return newArr;
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  const newObj = {};
  Object.keys(obj).map((key, i, arr) => newObj[obj[key]] = arr[i]);
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defObj = {};
  Object.keys(obj).map((key, i, arr) => defObj[obj]);
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
