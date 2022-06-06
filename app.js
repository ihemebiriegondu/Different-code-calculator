const buttons = document.querySelectorAll(".buttons");
const decimalPoint = document.querySelector(".decimal");
const display = document.getElementById("display");
const currentDisplay = document.getElementById("current-display");
const prevDisplay = document.getElementById("prev-display");
const operators = document.querySelectorAll(".operator");
const allClear = document.getElementById("all-clear");
const deletePrev = document.getElementById("delete");
const equalsTo = document.getElementById("equal-to");
const add = document.getElementById("add").value;
const subtract = document.getElementById("subtract").value;
const multiply = document.getElementById("multiply").value;
const divide = document.getElementById("divide").value;

// displaying button values
buttons.forEach(button => {

    let displayButtons = () => {

        let prevDisplayedValue = prevDisplay.innerHTML;
        let buttonValue = button.value;

        if (prevDisplayedValue === "0") {
            allClear.value = "CE";
            prevDisplay.innerHTML = buttonValue;
        } else {
            prevDisplay.innerHTML = prevDisplayedValue + buttonValue;
        }
    }
    button.addEventListener("click", displayButtons);
});

//decimal point

let decimalPointFunction = () => {
    let prevDisplayedValue = prevDisplay.innerHTML;
    currentDisplayedValue = currentDisplay.innerHTML;

    if (prevDisplayedValue === "0" || currentDisplayedValue === "") {
        allClear.value = "CE";
        prevDisplay.innerHTML = prevDisplayedValue + ".";
    } else {
        prevDisplayedValue = currentDisplay.innerHTML;
        prevDisplay.innerHTML = prevDisplayedValue + ".";
    }
}
decimalPoint.addEventListener("click", decimalPointFunction);


//using operations to get answer
operators.forEach(operator => {

    let operatorButtons = () => {
        let prevDisplayedValue = prevDisplay.innerHTML;
        let currentDisplayedValue = currentDisplay.innerHTML;
        let operatorValue = operator.value;

        if (prevDisplayedValue === "0") {
            prevDisplay.innerHTML = buttonValue;
        }

        if (operatorValue === divide) {
            if (currentDisplayedValue === "0" || currentDisplayedValue === "") {
                prevDisplay.innerHTML = prevDisplayedValue + "/";
            } else {
                prevDisplayedValue = currentDisplay.innerHTML;
                prevDisplay.innerHTML = prevDisplayedValue + "/";
            } 
            return;
        }

        if (operatorValue === multiply) {
            if (currentDisplayedValue === "0" || currentDisplayedValue === "") {
                prevDisplay.innerHTML = prevDisplayedValue + "*";
            } else {
                prevDisplayedValue = currentDisplay.innerHTML;
                prevDisplay.innerHTML = prevDisplayedValue + "*";
            } 
            return;
        }

        if (operatorValue === add) {
            if (currentDisplayedValue === "0" || currentDisplayedValue === "") {
                prevDisplay.innerHTML = prevDisplayedValue + "+";
            } else {
                prevDisplayedValue = currentDisplay.innerHTML;
                prevDisplay.innerHTML = prevDisplayedValue + "+";
            } 
            return;
        }

        if (operatorValue === subtract) {
            if (currentDisplayedValue === "0" || currentDisplayedValue === "") {
                prevDisplay.innerHTML = prevDisplayedValue + "-";
            } else {
                prevDisplayedValue = currentDisplay.innerHTML;
                prevDisplay.innerHTML = prevDisplayedValue + "-";
            } 
            return;
        }
    }

    operator.addEventListener("click", operatorButtons)
});


//equals answer

let equalToFunction = () => {
    let answer = prevDisplay.innerHTML;
    if (answer) {
        try {
            currentDisplay.innerHTML = eval(answer);
        }
        catch (err) {
            currentDisplay.textContent = "Syntax ERROR!";
            prevDisplay.textContent = "";
        }
    }
}
equalsTo.addEventListener("click", equalToFunction);


//deleting values   this is where i am currently

let deletePrevItem = () => {
    let deletableDisplayedValue = prevDisplay.innerHTML;
    prevDisplay.innerHTML = deletableDisplayedValue.substring(0, deletableDisplayedValue.length - 1);
}

deletePrev.addEventListener("click", deletePrevItem)

// clearing inputs
let clearAll = () => {
    allClear.value = "AC";
    currentDisplay.textContent = "";
    prevDisplay.textContent = "0";
}

