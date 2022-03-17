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
 * @desc Leap years
 *
 */

'use strict';


/**
 * Tells if a year is leap.
 * @param {Number} year
 */
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 != 0) {
      return true;
    } else {
      if ((year / 100) % 4 === 0) {
        return true;
      } else {
        return false;  
      }
    } 
  } else {
    return false;  
  }
}

/**
 * Prepares the input value, a number representing a year.
 * @param {String} args
 * @returns {Number}
 */
const inputYear = function(args) {
  let year = Number(args);
      
  if (!isNaN(year) && Number.isInteger(year) && year >= 0) {
    return year;
  } else {
    return 'Los valores no son válidos. ';
  }
};

module.exports = {inputYear, isLeap};
