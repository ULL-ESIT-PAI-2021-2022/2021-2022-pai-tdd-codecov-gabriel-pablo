const constantFolding = require('../src/constant-folding');
const should = require('chai').should();


const simples = [
  {text: `a=2*3;`, result: `a = 6;`},
  {text: `var f = 3+null;`, result: `var f = 3;`},
  {text: `var e = 4 | 3;`, result: `var e = 7;`},
  {text: `var d = 3+"c";`, result: `var d = '3c';`},
  {text: `var b = 9 +1;`, result: `var b = 10;`},
  {text: `var a = 2+3*5+b;`, result: `var a = 17 + b;`}
];

const arrayLength = [
  {text: `[1,2,3].length;`, result: `3;`},
  {text: `[1,2,3,4,'a'].length;`, result: `5;`},
  {text: `["1,2,3"].length;`, result: `1;`},
  {text: `["1,2",3].length;`, result: `2;`},
  {text: `[].length;`, result: `0;`},
]

const arrayJoin = [
  {text: `[1,2,3].join();`, result: `'1,2,3';`},
  {text: `[1,2,3,4,'a'].join();`, result: `'1,2,3,4,a';`},
  {text: `["1,2,3"].join();`, result: `'1,2,3';`},
  {text: `["1,2",3].join();`, result: `'1,2,3';`},
  {text: `[].join();`, result: `'';`},
  {text: `[1,2,3].join('a');`, result: `'1a2a3';`},
  {text: `[1,2,3,4,'a'].join(2);`, result: `'12223242a';`},
  {text: `["1,2,3"].join('@');`, result: `'1,2,3';`},
  {text: `["1,2",3].join(' ');`, result: `'1,2 3';`},
  {text: `[].join();`, result: `'';`},
]

describe('constantFolding literal tests', () => {
  for (let c of simples) {
    test(`Test ${c.text} = ${c.result}`, () => {
      let oldLog = console.log;
      console.log = x => x;

       const result = constantFolding(c.text);
 
       result.should.equal(c.result);
       
       console.log = oldLog;
    });
  }
});

describe('constantFolding arrays.length tests', () => {
  for (let c of arrayLength) {
    xtest(`Test ${c.text} = ${c.result}`, () => {
      let oldLog = console.log;
      console.log = x => x;

       const result = constantFolding(c.text);
 
       result.should.equal(c.result);
       
       console.log = oldLog;
    });
  }
});

describe('constantFolding arrays.join tests', () => {
  for (let c of arrayJoin) {
    xtest(`Test ${c.text} = ${c.result}`, () => {
      let oldLog = console.log;
      console.log = x => x;

       const result = constantFolding(c.text);
 
       result.should.equal(c.result);
       
       console.log = oldLog;
    });
  }
});