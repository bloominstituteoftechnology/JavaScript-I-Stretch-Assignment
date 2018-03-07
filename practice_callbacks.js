const firstItem = (arr, cb) => {
  cb(arr[0]);
}

const getLength = (arr, cb) => {
  cb(arr.length);
}

const last = (arr, cb) => {
  cb (arr[arr.length - 1]);
}

const sumNums = (x, y, cb) => {
  let sum = x + y;
  cb(sum);
}

const multiplyNums = (x, y, cb) => {
  let product = x * y;
  cb(product);
}

const contains = (item, list, cb) => {
  for(let i = 0; i < list.length; i++) {
    if(list[i] = item) {
      cb(true);
    }
  }
  cb(false);
}
