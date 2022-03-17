/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Pérez González
 * @author Lorenzo Gabriel Pérez González
 * @since Mar 17 2022
 *
 * @desc Test of Substract two numbers
 *
 * @see {@link https://jestjs.io/docs/getting-started}
 */

 const leapYears = require('../src/leap-years-P61634.js');
 const inputYear = leapYears.inputYear;
 const isLeap = leapYears.isLeap;

 describe('Leap years', () => {
   test('The input is correct', () => {
     expect(inputYear('2000')).toEqual(2000);
   });
   test('The input is not correct', () => {
     expect(inputYear('200a')).toEqual('Los valores no son válidos. ');
   });
   test('Tells if a year is leap', () => {
     expect(isLeap(2000)).toEqual(true);
     expect(isLeap(2004)).toEqual(true);
   });
   test('Tells if a year is not leap', () => {
     expect(isLeap(2001)).toEqual(false);
     expect(isLeap(1900)).toEqual(false);
  });
 });