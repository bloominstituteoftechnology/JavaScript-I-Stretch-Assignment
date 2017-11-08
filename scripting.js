const flatten = (elements) => {
    // Flattens a nested array (the nesting can be to any depth).
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  
    const mergeArr = (firstArr, secondArr) => {
      const merged = [];
      console.log(merged.length)

    
      if (firstArr.length === 0) {
        for (let n = 0; n < secondArr.length; n++) {
            merged.push(secondArr[n]);
        }
      }

      for (let i = 0; i < firstArr.length; i++) {
        merged.push(firstArr[i]);
        if (merged.length === firstArr.length) {
          for (let n = 0; n < secondArr.length; n++) {
            merged.push(secondArr[n]);
          }
        }
      }
      return merged;
    };
  
    const tr = [];
    const zx = [3, 4];
  
    y = mergeArr(tr, zx);
  
    console.log(y)
  
    let flatArray = [];
    
  
    for (let i = 0; i < elements.length; i++) {
      // console.log(elements[i]);
      if (Array.isArray(elements[i])) {
        // console.log(Array.isArray(elements[i]))
        console.log(elements[i]);
        // flatArray = mergeArr(flatArray, flatten(elements[i]));
        console.log(flatArray);
      } else {
        // console.log(elements[i]);
        flatArray.push(elements[i]);
      }
    }
    // console.log(flatArray);
    
    return flatArray;
  };
  
  const x = flatten([1, [2], [[3]], [[[4]]]]);
  
  const a = [[[]], 2];
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      console.log(typeof a[i], a[i].length, Array.isArray(a[i]))
    } else {
      console.log(typeof a[i], a[i].length, Array.isArray(a[i]))
    }
  
  }
  
  const ss = [];
  console.log(typeof ss[0] === 'undefined')
  
  console.log(x)