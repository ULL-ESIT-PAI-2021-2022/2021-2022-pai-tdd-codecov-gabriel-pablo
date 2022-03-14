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
 * @desc Divide two numbers
 *
 */

'use strict';

/**
 * Divide two numbers and return the result
 * @param {Number} number1 First operand
 * @param {Number} number2 Second operand
 * @returns {Number} The division of the operands
 */
function divideNumbers(number1, number2) {
  if (isNaN(number1) || isNaN(number2)) {
    return 'Invalid operand.';
  }
  return Math.floor(number1 / number2);
}

module.exports = divideNumbers;
