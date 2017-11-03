const callBackMethods = require('../src/callbacks');
/* eslint-disable no-undef */

describe('callback functions', () => {
  const listOfFood = [
    'cheetoes',
    'bananas',
    'turkey leg',
    'cobbler',
    'bananas',
  ];

  describe('firstItem', () => {
    it('should pass the first item in the list to callBack', () => {
      let itemToTest;
      callBackMethods.firstItem(listOfFood, (first) => {
        itemToTest = first;
      });
      expect(itemToTest).toBe(listOfFood[0]);
    });
  });
});
