const numberForm = document.querySelector("#number_form");
const maxNumberInput = document.querySelector("#maxNumber_input");
const selectedNumberInput = document.querySelector("#selectedNumber_input");
const selectedResult = document.querySelector("#resultSpan");
const gameResult = document.querySelector("#gameResultSpan");



function handleGameResult(selectedNumber, randomNumber) {
    selectedResult.innerText = `You chose: ${selectedNumber}, the machine chose: ${randomNumber}.`;
    selectedNumber = parseInt(selectedNumber);
    if(selectedNumber === randomNumber) {
        gameResult.innerText = "You won!";
    } else {
        gameResult.innerText = "You lost!";
    }
}

function handleRandomNumber(event){
    event.preventDefault();
    const selectedNumber = selectedNumberInput.value;
    const maxNumbder = maxNumberInput.value;
    const randomNumber = Math.ceil(Math.random() * maxNumbder);

    handleGameResult(selectedNumber, randomNumber);
}

function handleInput(){
    const maxNumberValue = maxNumberInput.value;

    maxNumberInput.innerText = `${maxNumberValue}`;
    numberForm.addEventListener("submit", handleRandomNumber);
}


function init(){
    maxNumberInput.oninput = handleInput;
}
init();