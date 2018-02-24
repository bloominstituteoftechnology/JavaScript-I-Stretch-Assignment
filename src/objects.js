const keys = obj => Object.keys(obj);

const values = obj => Object.values(obj);

const mapObject = (obj, cb) => Object.keys(obj).reduce((a, c) => {
  a[c] = cb(obj[c]);
  return a;
}, {});

const pairs = obj => Object.entries(obj);

const invert = obj => Object.entries(obj).reduce((a, c) => {
  const [k, v] = c;
  a[v] = k;
  return a;
}, {});


const defaults = (obj, defaultProps) => {
  const x = Object.entries(obj);
  const y = Object.entries(defaultProps);
  return [...x, ...y].reduce((a, c) => {
    const [k, v] = c;
    if (!(k in a)) a[k] = v;
    return a;
  }, {});
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
