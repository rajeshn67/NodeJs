// modules protect their variables and function from leaking
var x="rajesh";
 export function calculate(a,b){
    const sum = a+b;
    console.log(sum);
}
 //exporting the function calculate