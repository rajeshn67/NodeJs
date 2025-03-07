require("./xyz"); //One module into another module
const obj= require("./sum");

var a =33;
var b=22;
obj.calculate(a,b);
console.log(obj.x);

console.log(globalThis === global); //true