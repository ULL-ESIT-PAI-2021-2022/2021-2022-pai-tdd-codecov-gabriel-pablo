const sumNumbers = require('../src/sum');

describe('Sum', () => {
  test('Sum between two numbers', () => {
    expect(sumNumbers(2, 3)).toEqual(5);
  });  
});