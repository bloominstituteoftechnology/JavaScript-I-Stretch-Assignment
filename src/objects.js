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

const invert = (obj) => {
  Object.keys(obj).forEach((key) => {
    const newKey = obj[key];
    obj[newKey] = key;
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

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
