import Big from "big.js"
import operate from "./operate"
import isNumber from "./isNumber"

export default function operaciones(state, buttonName) {

    if (buttonName === "AC") {
      return {
        totalResult: null,
        siguiente: null,
        operator: null,
      };
    }
  
  
    if (isNumber(buttonName)) {
      if (buttonName === "0" && state.after === "0") return {data:"ninguna"}
      
      if (state.operator) {
  
        if (state.after) return { after: state.after + buttonName }
        
        return { after: buttonName }
      }
      
      if (state.after) {
  
        const after = state.after === "0" ? buttonName : state.after + buttonName;
  
        return {
          after,
          totalResult: null,
        }
  
      }
  
      return {
        after: buttonName,
        totalResult: null,
      }
    }
  
    if (buttonName === "%") {
  
      if (state.operator && state.after) {
  
        const result = operate(state.totalResult, state.after, state.operator)
  
        return {
          totalResult: Big(result)
            .div(Big("100"))
            .toString(),
          after: null,
          operator: null,
        }
  
      }
  
      if (state.after) {
        return {
          after: Big(state.after)
            .div(Big("100"))
            .toString(),
        }
      }
  
      return {};
  
    }
  
    if (buttonName === ".") {
  
      if (state.after) {
        
        if (state.after.includes(".")) return {}
  
        return { after: state.after + "." }
      }
  
      return { after: "0." }
  
    }
  
    if (buttonName === "=") {
  
      if (state.after && state.operator) {
  
        return {
          totalResult: operate(state.totalResult, state.after, state.operator),
          after: null,
          operator: null,
        }
  
      } else return {}
  
    }
  
    if (buttonName === "+/-") {
  
      if (state.after) return { after: (-1 * parseFloat(state.after)).toString() }
  
      if (state.totalResult) return { totalResult: (-1 * parseFloat(state.totalResult)).toString() }
  
      return {}
  
    }
  
    if (state.operator) {
  
      return {
        totalResult: operate(state.totalResult, state.after, state.operator),
        after: null,
        operator: buttonName,
      }
  
    }
  
    if (!state.after) return { operator: buttonName }
    
    return {
      totalResult: state.after,
      after: null,
      operator: buttonName,
    }
  
  }