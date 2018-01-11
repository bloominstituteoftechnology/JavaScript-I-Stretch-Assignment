// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i)
  }
}

const map = (elements, cb) => {
  const newArray = []
  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i]))
  }
  return newArray
}

const reduce = (elements, cb, startingValue) => {
  let startIndex = 0

  if (startingValue === undefined) {
    startingValue = elements[0]
    startIndex = 1
  }
  for (let i = startIndex; i < elements.length; i++) {
    startingValue = cb(startingValue, elements[i])
  }
  return startingValue
}

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      return elements[i]
    }
  }
  return 'undefined'
}

const filter = (elements, cb) => {
  const emptyArray = []
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) === true) {
      emptyArray.push(elements[i])
    }
  }
  return emptyArray
}

/* STRETCH PROBLEM */

const flatten = (elements) => {
  const flattenedArr = []
  each(elements, (item) => {
    if (Array.isArray(item)) flattenedArr.push(...flatten(item))
    else flattenedArr.push(item)
  })
  return flattenedArr
}

console.log(flatten([1, [2], [3, [[4]]]]))

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
}
