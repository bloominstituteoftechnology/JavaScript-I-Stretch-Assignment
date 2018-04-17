const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions
let cb = x => x;
// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

function keys(obj) {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return Object.keys(obj);
}
console.log(keys(testObject));


function values(obj) {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const values = [];
  for ( let prop in obj ) {
    (typeof obj[prop] === "function") ? null : values.push(obj[prop])
  }
  return values;
}
console.log(values(testObject));


cb = x => "maped: "+x;
function mapObject(obj, cb) {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
  const mapped = {}
  for ( let prop in obj ){
    mapped[prop] = cb(obj[prop]);
  }
  return mapped;
}
console.log(mapObject(testObject, cb));



function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return Object.entries(obj);
}
console.log(pairs(testObject));



/* STRETCH PROBLEMS */

function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
}

function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
}
