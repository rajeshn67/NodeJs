require("./xyz"); //One module into another module
const {x,calculate}= require("./sum");
// import {x , calculate } from './sum.js';

var a =33;
var b=22;

console.log(x);
calculate(a,b);
console.log(globalThis === global); //true