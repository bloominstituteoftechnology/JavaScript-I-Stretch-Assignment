// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  return Object.keys(obj);
};

const values = (obj) => {
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  Object.keys(obj).forEach(key => (obj[key] = cb(obj[key])));
  return obj;
};

const pairs = (obj) => {
  return Object.keys(obj).map((key) => {
    return [key, obj[key]];
  });
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  Object.keys(obj).forEach((key) => {
    const nKey = obj[key];
    obj[nKey] = key;
    delete obj[key];
  });
  return obj;
};

const defaults = (obj, defaultProps) => {
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
