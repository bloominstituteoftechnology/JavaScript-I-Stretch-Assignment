const keys = (obj) => {
  return Object.keys(obj);
};

const values = (obj) => {
  return Object.values(obj);
};

const mapObject = (obj, cb) => {
  const objectKeysArr = Object.keys(obj);
  const objectValsArr = Object.values(obj);
  for (let i = 0; i < objectKeysArr.length; i++) {
    obj[objectKeysArr[i]] = cb(objectValsArr[i]);
  }
  return obj;
};

const pairs = (obj) => {
  const arrArr = [];
  const objKeysArr = keys(obj);
  const objValsArr = values(obj);
  const arrArrLength = objKeysArr.length;
  for (let i = 0; i < arrArrLength; i++) {
    arrArr.push([objKeysArr[i], objValsArr[i]]);
  }
  return arrArr;
};

const invert = (obj) => {
  const newObj = {};
  const objKeysArrParam = keys(obj);
  const objValsArrParam = values(obj);
  for (let i = 0; i < objKeysArrParam.length; i++) {
    newObj[objValsArrParam[i]] = objKeysArrParam[i];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  const defaultPropsKeysValsArr = pairs(defaultProps);
  for (let i = 0; i < defaultPropsKeysValsArr.length; i++) {
    if (obj[defaultPropsKeysValsArr[i][0]] === undefined) {
      obj[defaultPropsKeysValsArr[i][0]] = defaultPropsKeysValsArr[i][1];
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
