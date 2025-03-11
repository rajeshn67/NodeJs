// modules protect their variables and function from leaking
var x = "Rajesh";
//  export 
 function calculate(a,b){
    const sum = a+b;
    console.log(sum);
}
module.exports = {x,calculate}
 //exporting the function calculate