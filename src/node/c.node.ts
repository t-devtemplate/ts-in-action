let c1 = require('./a.node');
let c2 = require('./b.node');
let c3 = require('../es6/a')
//let c3'../es6/d';

console.log(c1);
console.log(c2);
console.log(c3);
c3.default();
//c4();