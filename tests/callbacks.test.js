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
    it('should pass the first item in the list to the callBack', () => {
      let itemToTest;
      callBackMethods.firstItem(listOfFood, (first) => {
        itemToTest = first;
      });
      expect(itemToTest).toBe(listOfFood[0]);
    });
    it('should call the callback with the expected input', () => {
      const mock = jest.fn();
      callBackMethods.firstItem(listOfFood, mock);
      expect(mock).toBeCalledWith('cheetoes');
    });
  });

  describe('getLength', () => {
    it('should pass back the length of the array to the callback', () => {
      let len = 0;
      callBackMethods.getLength(listOfFood, (length) => {
        len = length;
      });
      expect(len).toBe(5);
    });
    it('should call the callback with the expected input', () => {
      const mock = jest.fn();
      callBackMethods.getLength(listOfFood, mock);
      expect(mock).toBeCalledWith(5);
    });
  });

  describe('last', () => {
    it('should pass back the last item in the array to the callback', () => {
      let item;
      callBackMethods.last(listOfFood, (lastItem) => {
        item = lastItem;
      });
      expect(item).toBe('bananas');
    });
    it('should call the given callback with the expected input', () => {
      const mock = jest.fn();
      callBackMethods.last(listOfFood, mock);
      expect(mock).toBeCalledWith('bananas');
    });
  });

  describe('sumNums', () => {
    it('should pass back the result of the added nums to the callback', () => {
      let result = 0;
      callBackMethods.sumNums(10, 20, (res) => {
        result = res;
      });
      expect(result).toBe(30);
    });
    it('should call the given callback with the expected input', () => {
      const mock = jest.fn();
      callBackMethods.sumNums(11, 22, mock);
      expect(mock).toBeCalledWith(33);
    });
  });

  describe('multiplyNums', () => {
    it('should pass back the result of the multiplied nums to the callback', () => {
      let result = 0;
      callBackMethods.multiplyNums(10, 20, (res) => {
        result = res;
      });
      expect(result).toBe(200);
    });
    it('should call the given callback with the expected input', () => {
      const mock = jest.fn();
      callBackMethods.multiplyNums(5, 11, mock);
      expect(mock).toBeCalledWith(55);
    });
  });

  describe('contains', () => {
    it('should pass back true if item is in array', () => {
      let flag;
      callBackMethods.contains('bananas', listOfFood, (truf) => {
        flag = truf;
      });
      expect(flag).toBe(true);
    });
    it('should pass back false if item is NOT in array', () => {
      let flag;
      callBackMethods.contains('boat', listOfFood, (truf) => {
        flag = truf;
      });
      expect(flag).toBe(false);
    });
  });

  describe('removeDuplicates', () => {
    it('should remove any duplicate items from the array', () => {
      let arrToTest = [];
      callBackMethods.removeDuplicates(listOfFood, (arrayFreeOfDups) => {
        arrToTest = arrayFreeOfDups;
      });
      expect(arrToTest.length).toBe(4);
    });
  });
});
