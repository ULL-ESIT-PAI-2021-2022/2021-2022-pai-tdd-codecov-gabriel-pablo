/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Pérez González
 * @author Lorenzo Gabriel Pérez González
 * @since Mar 14 2022
 *
 * @desc Test of Multiply two numbers
 *
 * @see {@link https://jestjs.io/docs/getting-started}
 */

const multiplyNumbers = require('../src/product');

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
    expect(multiplyNumbers(1, 'a')).toEqual('Invalid operand.');
  });
});