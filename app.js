const buttons = document.querySelectorAll(".buttons");
const display = document.getElementById("display");
const operators = document.querySelectorAll(".operator");
const allClear = document.getElementById("all-clear");
const deletePrev = document.getElementById("delete");

// displaying button values
buttons.forEach(button => {

    let displayButtons = () => {
       
        let displayedValue = display.value;
        let buttonValue = button.value;

        if (displayedValue === "0") {
            display.value = buttonValue;
        } else {
            display.value = displayedValue + buttonValue;
        }
    }

    button.addEventListener("click", displayButtons);
});


// using operations to get answer
operators.forEach(operator => {

    let operatorButtons = (number1, number2) => {
        
    }
    operator.addEventListener("click", operatorButtons)
});

//deleting values   this is where i am currently
let deletePrevItem = (...displayedValue) =>{
    let elementToDelete = displayedValue;
    console.log(elementToDelete)
}

deletePrev.addEventListener("click", deletePrevItem)


// clearing inputs
let clearAll = () => {
    display.value = "0";
}

