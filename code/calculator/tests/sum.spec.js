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
 * @desc Test of Sum two numbers
 *
 * @see {@link https://jestjs.io/docs/getting-started}
 */

const sumNumbers = require('../src/sum');

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
    expect(sumNumbers(1, 'a')).toEqual('Invalid operand.');
  });
});