/* eslint-disable */

const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
};cb(arr[0]);
-		 +};

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
};cb(arr.length);
-const last = (arr, cb) => {		 +};

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
}; cb(arr[arr.length - 1]);
-  // sumNums adds two numbers (x, y) and passes the result to the callback.		 +};

const sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}; cb(x + y);
-};		 +};

const multiplyNums = (x, y, cb) => {
  // multiplyNums multiplies two numbers and passes the result to the callback.
};cb(x * y);
-};		 +};

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
};let existInArray;
-  // Pass the duplicate free array to the callback function.		 +  for(let i = 0; i < list.length; i++) {
-  // Do not mutate the original array.		 +    if(item === list[i]) {
-};		 +      existInArray = true;
-		 +      break;
-/* eslint-enable */		 +    } else {
-module.exports = {		 +      existInArray = false;
-  firstItem,		 +    }
-  getLength,		 +  }
-  last,		 +  cb(existInArray);
-  sumNums,		 +};

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}; let newArray = [];
+  let newObj = {};
+  for(let i = 0; i < array.length; i++) {
+    newObj[array[i]] = "Ting";
+  }
+  for(let key in newObj) {
+    newArray.push(key);
+  }
+  cb(newArray);
+};
+
+/* eslint-enable */

/* eslint-enable */
module.exports = {
  firstItem,
  getLength,
  last,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates,
};
