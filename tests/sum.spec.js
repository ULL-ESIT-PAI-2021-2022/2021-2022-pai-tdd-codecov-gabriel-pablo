/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Pérez González
 * @author Gabriel Lorenzo Pérez González
 * @since Mar 12 2022
 * 
 * @desc Test of Sum two numbers
 *
 * @see {@link https://jestjs.io/docs/getting-started}
 */

const sumNumbers = require('../src/sum');

describe('Sum', () => {
  test('Sum between two numbers', () => {
    expect(sumNumbers(2, 3)).toEqual(5);
  });  
});