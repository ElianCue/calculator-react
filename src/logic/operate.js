import Big from "big.js"

export default function operate (numberOne, numberTwo, operator){
    const one = Big(numberOne || "0");
    const two = Big(numberTwo || (operator === "÷" || operator === "x" ? "1" : "0"));
    if(operator === "+") return one.plus(two).toString();

    if(operator === "-") return one.minus(two).toString();
    
    if(operator === "x") return one.times(two).toString();
    
    if(operator === "/") return one.div(two).toString();
        // if (two === 0){
        //     return console.warn('cannot divide for 0')
        // }
        // else

}
