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
 * @desc Sum two numbers
 *
 */

'use strict';

/**
 * Sum two numbers and return the result.
 * @param {Number} number1 First operand.
 * @param {Number} number2 Second operand.
 * @returns {Number} The sum of the operands.
 */
function sumNumbers(number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    return 'Invalid operand.';
  }
  return number1 + number2;
}

module.exports = sumNumbers;
