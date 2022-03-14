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
 * @desc Test of Divide two numbers
 *
 * @see {@link https://jestjs.io/docs/getting-started}
 */

const divideNumbers = require('../src/division');

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
    expect(divideNumbers(1, 'a')).toEqual('Invalid operand.');
  });
  xtest('Division with a bool is not accepted', () => {
    expect(divideNumbers(1, true)).toEqual('Invalid operand.');
  });
});
