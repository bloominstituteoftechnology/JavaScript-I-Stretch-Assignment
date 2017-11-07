// const removeDuplicates = (array) => {
//     // removeDuplicates removes all duplicate values from the given array.
//     // Pass the duplicate free array to the callback function.
//     // Do not mutate the original array.

//   const array2 = [];
//   let i=0;
//   for (array[i]; i < array.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array[i] !== array2[j]) {
//         array2.push(array2[j]);
//       }
//     }
//     return array2;
//   }
// };
// const array = [1, 2, 3, 4, 5, 5, 4, 4];
// console.log(removeDuplicates(array));

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  return (Object.values(obj));
};
console.log();

