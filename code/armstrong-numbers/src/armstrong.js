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
 * @desc Armstrong Numbers:
 *       This program tells if a number is an Armstrong Number.
 *       This property means that a number is equal to the sum
 *       of its digits each of them raised to the power of the 
 *       number of digits.
 *
 */

'use strict';

/**
 * Function that determines if a number is an Armstrong number.
 * @param {Number} number
 * @param {Number} armstrongValue
 * @returns {Number}
 */
function isArmstrongNumber(number) {
  if (number === armstrongValue(number)) {
    return true;  
  } else {
    return false;  
  }
}

/**
 * Calculates how many digits has a specified number.
 * @param {Number} number
 * @returns {Number}
 */
function calcDigits(number) {
  let dividedNumber = number;
  let digits = 1;

  while (dividedNumber >= 10) {
    dividedNumber = Math.floor(dividedNumber / 10);
    digits++;
  }

  return digits;
}

/**
 * Implements the Armstrong formula.
 * @param {Number} number
 * @returns {Number}
 */
function armstrongValue(number) {
  const digits = calcDigits(number);
  let remainderNumber;
  let dividedNumber = number;
  let result = 0;

  for (let i = 0; i < digits; i++) {
    remainderNumber = dividedNumber % 10;
    dividedNumber = Math.floor(dividedNumber / 10);
    result += remainderNumber ** digits;
  }

  return result;  
}

/**
 * This function takes a value as parameter and checks if the 
 * type is a number. If it is, it returns the value.
 * @param {Number} value
 * @returns {Number}
 */
function checkValue(value) {  
  if (typeof(value) === 'function') {
    throw new Error('No se permiten funciones');
  } else if (typeof(value) === 'string') {
    throw new Error('No se permiten cadenas de caracteres');
  } else if (typeof(value) === 'object') {
    throw new Error('No se permiten objetos');
  } else if (typeof(value) === 'boolean') {
    throw new Error('No se permiten booleanos');
  } else if (typeof(value) === 'undefined') {
    throw new Error('No se permiten valores indefinidos');
  } else {
    if (value < 0) {
      throw new Error('No se permiten números negativos');
    } else if (!Number.isInteger(value)) {
      throw new Error('No se permiten números flotantes');
    } else {
      return value;
    }
  }
}

module.exports = {checkValue, armstrongValue, calcDigits, isArmstrongNumber};
