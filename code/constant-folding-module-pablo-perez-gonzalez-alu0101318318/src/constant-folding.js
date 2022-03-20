// See https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-constant-folding
const fs = require("fs");
const escodegen = require("escodegen");
const espree = require("espree");
const estraverse = require("estraverse");

"use strict";

module.exports = constantFolding, replaceByLiteral, replaceByLength, replaceByJoin;

/**
 * A function that transform an AST tree recognizing and evaluating constant 
 * expressions at compile time rather than computing them at runtime.
 * @param {string} code A string with the code to parse
 * @returns {string} Returns the transformed code
 */
function constantFolding(code) {
  const t = espree.parse(code, { ecmaVersion: 6, loc: false });
  estraverse.traverse(t, {
    leave: function (n, p) {
      if (
        n.type == "BinaryExpression" && 
        n.left.type == "Literal" && n.right.type == "Literal"
      ) { 
        replaceByLiteral(n); 
      } else if (
        n.type == "MemberExpression" &&
        n.property.name == "length"
      ) {
        replaceByLength(n);
      } else if (
        n.type == "CallExpression" &&
        n.callee.type == "MemberExpression" &&
        n.callee.property.name == "join"
      ) {
        n.arguments[0] ? replaceByJoin(n, n.arguments[0].value) : replaceByJoin(n);
      }
    },
  });
  let c = escodegen.generate(t);
  return c;
}

/**
 * Replace a BinaryExpression node with the result of the childs
 * @param {Node} n The node to replace to the result of the child node
 */
function replaceByLiteral(n) {
  n.type = "Literal";

  n.value = eval(`${n.left.raw} ${n.operator} ${n.right.raw}`);
  n.raw = String(n.value);

  delete n.left;
  delete n.right;
}

/**
 * Replace a MemberExpression when is .length and folds to the size of the array
 * @param {Node} n The node that calls .length
 */
function replaceByLength(n) {
  n.type = "Literal";
  let length = 0;

  for (let element in n.object.elements) {
    ++length;
  }

  n.value = length;
  n.raw = String(n.value);

  delete n.object;
  delete n.property;
  delete n.computed;
  delete n.optional;
}

/**
 * Remplace a calleeExpression when is .join() and folds to a string of the
 * elements
 * @param {Node} n The node to join 
 * @param {String} divider The divider that is between the elements of the array
 */
function replaceByJoin(n, divider = ',') {
  n.type = "Literal";
  let value = '';
  for (let i = 0; i < n.callee.object.elements.length; ++i) {
    value += n.callee.object.elements[i].value;
    if (i < n.callee.object.elements.length - 1) {
      value += divider;
    }
  }
  n.value = value;
  n.raw = String(value);

  delete n.calle;
  delete n.arguments;
  delete n.arguments;

}