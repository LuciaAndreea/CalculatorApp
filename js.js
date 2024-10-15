let number1 = "";
let number2 = "";
let operator = "";


//function to update the display
function updateDisplay(){
    document.getElementById("display").value = number1;
}


//function to clear the display
function clearDisplay(){
    number1 = "";
    number2 = "";
    operator = "";
    updateDisplay();
}

function handleButtonClicks(number){
    number1 +=number;
    updateDisplay();
}


function handleOperatorsSelection(op){
    if(number1 ==="") return;
    if(number2 !==""){
        operate();
    }
operator = op;
number2 = number1;
number1 = "";

}
//the main function for calculations

function operate(){
    if(number2 ==="" || number1==="") return;
    let result;
    const num2 = parseFloat(number2);
    const num1 = parseFloat(number1);

    switch(operator){
        case "+":
            result = num2+num1;
            break;
        case "-":
            result = num2 - num1;
            break;
        case "X":
            result = num2 *num1;
            break;
        case "/":
            result = num2 / num1;
            break;
        default:
            return;
    }

    number1 = result;
    operator = "";
    number2 = "";
    updateDisplay();
    
}

document.querySelectorAll(".number-button").forEach(button =>{
    button.addEventListener("click" , () =>{
        handleButtonClicks(button.textContent);
    });
});

document.querySelectorAll(".operator-button").forEach(button =>{
    button.addEventListener("click", () =>{
        handleOperatorsSelection(button.textContent);
    });
});

document.querySelector(".equals-button").addEventListener("click", operate);
document.querySelector(".clear-button").addEventListener("click" , clearDisplay);

