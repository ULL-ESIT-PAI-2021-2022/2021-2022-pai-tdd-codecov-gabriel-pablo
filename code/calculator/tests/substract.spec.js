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
 * @desc Test of Substract two numbers
 *
 * @see {@link https://jestjs.io/docs/getting-started}
 */

const substractNumbers = require('../src/substract');

describe('Sum', () => {
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
    expect(substractNumbers(1, 'a')).toEqual('Invalid operand.');
  });
  xtest('Substraction with a bool is not accepted', () => {
    expect(substractNumbers(1, true)).toEqual('Invalid operand.');
  });
});
