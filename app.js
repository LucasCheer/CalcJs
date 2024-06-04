//V A R I A B L E S

const input = document.getElementById("input");
const numbers = document.getElementsByClassName("numbers");
const clear = document.getElementById("clear");
const operators = document.getElementsByClassName("item3");
const equal = document.getElementById("equal");
var operationVariables =  {
    "a" : null,
    "b" : null,
    "operator" :null,
    "result" : 0
};

// F U N C T I O N S

function operation(a, operator, b){

    a = parseInt(a);
    b = parseInt(b);

    switch(operator){
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        default:
            return "error"
    }

};

//E V E N T S

// Input Numbers
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click",(event) => {
        const value = event.target.value;
        input.value += value;
    } )
};

//  Input Operators 

for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click",(event) => {
        let operatorValue = event.target.value;
        operationVariables.operator = operatorValue;
        let firstValue = input.value;
        operationVariables.a = firstValue;
        input.value = null;
    } )
};

//Output Result

equal.addEventListener("click", () => {
    let secondValue = input.value;
    operationVariables.b = secondValue;
    input.value = null;
    operationVariables.result = operation(operationVariables.a, operationVariables.operator, operationVariables.b);
    input.value = operationVariables.result;
});

//Clear all input

clear.addEventListener("click", () =>{
    input.value = null;
    operationVariables = {
        "a" : null,
        "b" : null,
        "operator" : null,
        "result": 0
    }
});

//Clear a digit for digit


