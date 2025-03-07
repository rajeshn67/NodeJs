// modules protect their variables and function from leaking
var x="rajesh";
function calculate(a,b){
    const sum = a+b;
    console.log(sum);
}
module.exports = {calculate:calculate
     , x:x
}; //exporting the function calculate