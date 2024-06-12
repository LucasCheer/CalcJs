//V A R I A B L E S
const input = document.getElementById("input");
const numbers = document.getElementsByClassName("numbers");
const clear = document.getElementById("clear");
const clearDigit = document.getElementById("clear-digit");
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

    a = parseFloat(a);
    b = parseFloat(b);

    switch(operator){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "error"
    }
};
function viewResult (){
    operationVariables.result = operation(operationVariables.a, operationVariables.operator, operationVariables.b);
    input.value = operationVariables.result;
}
function asignarPrimerNum (val){
    operationVariables.a = val;
}
function asignarSegundoNum(val){
    operationVariables.b = val;
    input.value = "";
}

//E V E N T S
document.addEventListener("DOMContentLoaded", () => {
    input.focus();
})

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
        asignarPrimerNum(input.value)
        input.value = "";
        input.focus();
    } )
};

//Output Result

const resultado = equal.addEventListener("click", () => {
    asignarSegundoNum(input.value);
    input.value = "";
    viewResult();
    input.focus();
});

//Clear all input

clear.addEventListener("click", () =>{
    input.value = "";
    operationVariables = {
        "a" : null,
        "b" : null,
        "operator" : null,
        "result": 0
    }
});

//Clear a digit for digit

clearDigit.addEventListener("click", ()=>{
    let inputValue = input.value;
    if(inputValue.length > 0){
        input.value = inputValue.slice(0, inputValue.length - 1);
    }else{
        alert("Escribe algo");
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Prevenir comportamiento predeterminado
        asignarSegundoNum(input.value);
        input.value = '';
        viewResult();
        console.log('Enter pressed: input cleared and result shown'); // Depuración
    }
});
