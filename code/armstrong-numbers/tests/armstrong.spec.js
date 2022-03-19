
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Pablo Pérez González
 * @author Lorenzo Gabriel Pérez González
 * @since Mar 15 2022
 *
 * @desc Test of Armstrong Numbers
 *
 * @see {@link https://jestjs.io/docs/getting-started}
 */

const armstrong = require('../src/armstrong');

const checkValue = armstrong.checkValue;
const calcDigits = armstrong.calcDigits;
const armstrongValue = armstrong.armstrongValue;
const isArmstrongNumber = armstrong.isArmstrongNumber;

describe('Armstrong numbers', () => {
  xtest('Positive integers are accepted', () => {
    expect(checkValue(6)).toEqual(6);
  });
  xtest('Negative integers are not accepted', () => {
    expect(() => checkValue(-4)).toThrow('No se permiten números negativos');
  });
  xtest('Floats are not accepted', () => {
    expect(() => checkValue(4.5)).toThrow('No se permiten números flotantes');
  });
  xtest('Strings are not accepted', () => {
    expect(() => checkValue('4')).toThrow('No se permiten cadenas de caracteres');
  });
  xtest('Functions are no accepted', () => {
    expect(() => checkValue(() => {})).toThrow('No se permiten funciones');
  });
  xtest('Objects are not accepted', () => {
    expect(() => checkValue(['4'])).toThrow('No se permiten objetos');
  });
  xtest('Booleans are no accepted', () => {
    expect(() => checkValue(true)).toThrow('No se permiten booleanos');
  });
  xtest('Undefined values are no accepted', () => {
    expect(() => checkValue(undefined)).toThrow('No se permiten valores indefinidos');
  });
  test('Tells how many digits has a number', () => {
    expect(calcDigits(1)).toEqual(1);
    expect(calcDigits(10)).toEqual(2);
    expect(calcDigits(1000000)).toEqual(7);
  });
  test('Calculates with the Armstrong Formula', () => {
    expect(armstrongValue(10)).toEqual(1);
    expect(armstrongValue(153)).toEqual(153);
  });
  test('Checks if a number is an Armstrong number', () => {
    expect(isArmstrongNumber(9)).toEqual(true);
    expect(isArmstrongNumber(10)).toEqual(false);
    expect(isArmstrongNumber(153)).toEqual(true);
    expect(isArmstrongNumber(154)).toEqual(false);
  });
});
