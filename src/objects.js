/* eslint-disable */

const keys = (obj) => {
  return Object.keys(obj);
};

const values = (obj) => {
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  for (let i = 0; i <= Object.keys(obj).length - 1; i++) {
    obj[Object.keys(obj)[i]] = cb(Object.values(obj)[i], Object.keys(obj)[i]);
  }
  return obj;
};

const pairs = (obj) => {
  return Object.entries(obj);
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  const returnObj = {};
  for (let i = 0; i <= Object.values(obj).length - 1; i++) {
    returnObj[Object.values(obj)[i]] = Object.keys(obj)[i];
  }
  return returnObj;
};

const defaults = (obj, defaultProps) => {
  for (let i = 0; i <= Object.keys(defaultProps).length - 1; i++) {
    if (obj[Object.keys(defaultProps)[i]] === undefined) {
      obj[Object.keys(defaultProps)[i]] = defaultProps[Object.keys(defaultProps)[i]];
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
