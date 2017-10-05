      // Complete the following underscore functions.
      // Reference http://underscorejs.org/ for examples.

      const keys = (obj) => {
        return Object.keys(obj);
      };

      // Retrieve all the names of the object's properties.

      const values = (obj) => {
        const arr = [];
        Object.keys(obj).forEach((key) => {
          arr.push(obj[key]);
        });
        return arr;
      };
      // Return all of the values of the object's own properties.
      // Ignore functions
      // http://underscorejs.org/#values

        const mapObject = (obj, cb) => {
          // Like map for arrays, but for objects. Transform the value of each property in turn.
          // http://underscorejs.org/#mapObject
        };

        const pairs = (obj) => {
          let arr = Object.keys(obj).map((key) => {
            return [key, value];
          });
          return arr;
        };
//define new array;
//iterate over keys;
//push key and value into array:
//return new array;

        //Convert an object into a list of [key, value] pairs.
        // http://underscorejs.org/#pairs

      /* Extra credit */

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
