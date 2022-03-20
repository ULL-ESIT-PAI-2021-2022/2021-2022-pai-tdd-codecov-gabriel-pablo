## Functions

<dl>
<dt><a href="#constantFolding">constantFolding(code)</a> ⇒ <code>string</code></dt>
<dd><p>A function that transform an AST tree recognizing and evaluating constant 
expressions at compile time rather than computing them at runtime.</p>
</dd>
<dt><a href="#replaceByLiteral">replaceByLiteral(n)</a></dt>
<dd><p>Replace a BinaryExpression node with the result of the childs</p>
</dd>
<dt><a href="#replaceByLength">replaceByLength(n)</a></dt>
<dd><p>Replace a MemberExpression when is .length and folds to the size of the array</p>
</dd>
<dt><a href="#replaceByJoin">replaceByJoin(n, divider)</a></dt>
<dd><p>Remplace a calleeExpression when is .join() and folds to a string of the
elements</p>
</dd>
</dl>

<a name="constantFolding"></a>

## constantFolding(code) ⇒ <code>string</code>
A function that transform an AST tree recognizing and evaluating constant 
expressions at compile time rather than computing them at runtime.

**Kind**: global function  
**Returns**: <code>string</code> - Returns the transformed code  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | A string with the code to parse |

<a name="replaceByLiteral"></a>

## replaceByLiteral(n)
Replace a BinaryExpression node with the result of the childs

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Node</code> | The node to replace to the result of the child node |

<a name="replaceByLength"></a>

## replaceByLength(n)
Replace a MemberExpression when is .length and folds to the size of the array

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Node</code> | The node that calls .length |

<a name="replaceByJoin"></a>

## replaceByJoin(n, divider)
Remplace a calleeExpression when is .join() and folds to a string of the
elements

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| n | <code>Node</code> |  | The node to join |
| divider | <code>String</code> | <code>,</code> | The divider that is between the elements of the array |

