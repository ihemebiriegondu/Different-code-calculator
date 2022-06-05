const buttons = document.querySelectorAll(".buttons");
const decimalPoint = document.querySelector(".decimal");
const display = document.getElementById("display");
const operators = document.querySelectorAll(".operator");
const allClear = document.getElementById("all-clear");
const deletePrev = document.getElementById("delete");
const equalsTo = document.getElementById("equal-to");

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

//using operations to get answer
operators.forEach(operator => {
    
    let operatorButtons = () => {
        let displayedValue = display.value;
        let operatorValue = operator.value;

        if (displayedValue === "0") {
            display.value = "0";
        } else if (operator.value = "÷") {
            operatorValue = "/";
            display.value = displayedValue + operatorValue;
        } else if (operator.value = "x") {
            operatorValue = "*";
            display.value = displayedValue + operatorValue;
        }
    }
    operator.addEventListener("click", operatorButtons)
});




// using operations to get answer
/*operators.forEach(operator => {

    let operatorButtons = () => {
        if (operator.value == "+") {
            console.log("+");
        } else if (operator.value == "-") {
            console.log("-")
        } else if (operator.value == "x") {
            console.log("*")
        } else if (operator.value == "÷") {
            console.log("/")
        } else if (operator.value == "%") {
            console.log("percent")
        }
    }
    operator.addEventListener("click", operatorButtons)

});*/

//equals answer

let equalToFunction = () => {
    let answer = display.value;
    if (answer) {
        display.value = eval(answer);
    }
}
equalsTo.addEventListener("click", equalToFunction);


//deleting values   this is where i am currently

let deletePrevItem = () => {
    let deletableDisplayedValue = display.value;
    display.value = deletableDisplayedValue.substring(0, deletableDisplayedValue.length - 1);
}

deletePrev.addEventListener("click", deletePrevItem)

// clearing inputs
let clearAll = () => {
    display.value = "0";
}

