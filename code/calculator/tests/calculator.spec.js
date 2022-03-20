/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Pérez González
 * @author Lorenzo Gabriel Pérez González
 * @since Mar 12 2022
 * 
 * @desc Test of some simple operations
 *
 * @see {@link https://jestjs.io/docs/getting-started}
 */

const {sumNumbers, substractNumbers, multiplyNumbers, divideNumbers} = require('../src/calculator');


describe('Sum', () => {
  test('Sum between two positive numbers', () => {
    expect(sumNumbers(2, 3)).toEqual(5);
  }); 
  test('Sum between two negative numbers', () => {
    expect(sumNumbers(-7, -3)).toEqual(-10);
  });  
  test('Sum between a negative and a positive number', () => {
    expect(sumNumbers(7, -3)).toEqual(4);
  }); 
  test('Sum with a string is not accepted', () => { 
    expect(() => sumNumbers(1, 'a')).toThrow('Invalid operand.');
  });
});


describe('Substract', () => {
  test('Substraction between two positive numbers', () => {
    expect(substractNumbers(2, 3)).toEqual(-1);
  });
  test('Substraction between two negative numbers', () => {
    expect(substractNumbers(-5, -7)).toEqual(2);
  });
  test('Substraction between a positive and a negative number', () => {
    expect(substractNumbers(2, -3)).toEqual(5);
  });
  test('Substraction between a negative and a positive number', () => {
    expect(substractNumbers(-3, 2)).toEqual(-5);
  });
  test('Substraction with a string is not accepted', () => {
    expect(() => substractNumbers(1, 'a')).toThrow('Invalid operand.');
  });
});


describe('Product', () => {
  test('Product between two positive numbers', () => {
    expect(multiplyNumbers(2, 3)).toEqual(6);
  });
  test('Product between two negative numbers', () => {
    expect(multiplyNumbers(-7, -3)).toEqual(21);
  });
  test('Product between a negative and a positive number', () => {
    expect(multiplyNumbers(7, -3)).toEqual(-21);
  });
  test('Product with a string is not accepted', () => {
    expect(() => multiplyNumbers(1, 'a')).toThrow('Invalid operand.');
  });
});


describe('Division', () => {
  test('Division between two positive numbers', () => {
    expect(divideNumbers(4, 2)).toEqual(2);
  });
  test('Division between two negative numbers', () => {
    expect(divideNumbers(-12, -3)).toEqual(4);
  });
  test('Division between a negative and a positive number', () => {
    expect(divideNumbers(9, -3)).toEqual(-3);
  });
  test('Division with a string is not accepted', () => {
    expect(() => divideNumbers(1, 'a')).toThrow('Invalid operand.');
  });
});

