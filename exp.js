const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const sortedArray = array.slice().sort();
  const cleanArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (sortedArray[i + 1] === sortedArray[i]) {
      sortedArray.splice(i + 1, 0);    
    }cleanArray.push(sortedArray[i]);
  }
  cb(cleanArray);
};

function cb(array) {
  console.log(array);
};
const yasin = [0, 1, 1, 2, 3, 3, 6, 4]; //012364
removeDuplicates(yasin, cb);
