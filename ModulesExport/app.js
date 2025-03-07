require("./xyz"); //One module into another module
const {x,calculate}= require("./sum");

var a =33;
var b=22;
calculate(a,b);
console.log(x);

console.log(globalThis === global); //true