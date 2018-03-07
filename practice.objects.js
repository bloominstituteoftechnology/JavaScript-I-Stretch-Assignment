const keys = (obj) => {
  return Object.keys(obj);
}

const values = (obj) => {
  return Object.values(obj);
}

const pairs = (obj) => {
  return Object.entries(obj);
}

const mapObject = (obj, cb) => {
  let newObj = {};
  let keys = Object.keys(obj);

  for(let i = 0; i < keys.length; i++) {
    let eachKey = cb(obj[keys[i]]);  // get each key via the cb
    newObj[key[i]] = eachKey;  set each key on the newObj each key
  }
  return newObj;
}

const invert = (obj) => {
  let copyObj = {};
  let entries = Object.entries(obj);
  for(let i = 0; i < entries.length; i++) {
    // get comfortable with bracket notation
    copyObj[entries[i][1]] = entries[i][0];

  }
  return copyObj;
}
