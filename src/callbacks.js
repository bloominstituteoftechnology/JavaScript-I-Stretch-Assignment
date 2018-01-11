/* eslint-disable */

const altCoins = ['Ripple', 'Tronix', 'Pivx', 'Waves', 'Enjin Coin'];


const firstItem = (arr, cb) => {
  cb(arr[0])
}
firstItem(altCoins, firstItem => {
  console.log(`The first item is ${firstItem}.`)
})


const getLength = (arr, cb) => {
  cb(arr.length);
};
getLength(altCoins, length => {
  console.log(`The length of the array is ${length}.`);
});


const last = (arr, cb) => {
  cb(arr[arr.length - 1]);
};
last(altCoins, lastCoin => {
  console.log(`The last item in the array is ${lastCoin}.`);
});



const sumNums = (num1, num2, cb) => {
  cb(num1 + num2);
};
sumNums(5, 10, sum => {
  console.log(`The sum is ${sum}.`);
});


const multiplyNums = (num1, num2, cb) => {
  cb(num1 * num2);
};
multiplyNums(5, 10, product => {
  console.log(`The product is ${product}.`);
});


const contains = (arr, str, cb) => {
  const isInArray = () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === str) {
        return true;
      }
    } return false;
  };
  cb(isInArray());
};
contains(altCoins, 'Potcoin', result => {
  console.log(result ? 'Potcoin is in the array' : 'Potcoin is not in the array');
});

const removeDuplicates = (arr, cb) => {
  var mySet = new Set(arr);
  cb([...mySet]);
};
removeDuplicates(altCoins, uniqueCoins => {
  console.log(`altCoins with duplicates removed: ${uniqueCoins}`);
});


const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
};
forEach(altCoins, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});


/* eslint-enable */
module.exports = {
  firstItem,
  getLength,
  last,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates
}
