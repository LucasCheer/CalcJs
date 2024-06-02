//Variables

const response = document.getElementById("response");
const numbers = document.getElementsByClassName("numbers");
const clear = document.getElementById("clear");

//Eventos

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click",(event) => {
        const value = event.target.value;
        response.innerText += value;
    } )
}

clear.addEventListener("click", () =>{
    response.innerText = "";
})

