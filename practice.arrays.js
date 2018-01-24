const each = (elements, cb) => {
  for(let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
}

const map = (elements, cb) => {
  let newMap = [];
  for(let i = 0; i < elements.length; i++) {
    newMap.push(cb(elements[i]));
  }
  return newMap;
}

const reduce = (elements, cb, startingValue) => {
  let startingIndex = 0;
  if(startingValue === undefined) {
    startingValue = elements[0];
    startingIndex++;
  }

  for(let i = startingIndex; i < elements.length; i++) {
    startingValue = cb(startingValue, elements[i]);
  }
  return startingValue;
}

const find = (elements, cb) => {
  for(let i = 0; i < elements.length; i++) {
    if(cb(true)) {
      return elements[i];
    }
  }
  return undefined;
}

const filter = (elements, cb) => {
  let trueArray = [];
  for(let i = 0; i < elements.length; i++) {
    if(cb(true)) {
      trueArray.push(elements[i]);
    }
  }
  return trueArray;
}
