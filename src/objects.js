OBJECTS
// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
 for (let i = 0; i < elements.length; i++) {
  return cb(elements[i], i);
 }
 };
 }; 






for (const [key, value] of Object.entries(keys)); {
  console.log(`${key} ${value}`);
};

const values = (obj) => {
  _.values({one: 1, two: 2, three: 3});



const mapObject = (obj, cb) => {
 return Object.keys(obj).forEach(key => {
(obj[key] = cb(obj[key]));
});
 };
 };


 const pairs = (obj) => {
  
return Object.keys(obj).map(key => {
    ([key, obj[key]]);
  })
 };
 };
/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
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

//line 10
const values = (obj) => {

 return Object.values(obj);

};