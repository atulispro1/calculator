let result = document.getElementById("result");
let buttons = document.querySelectorAll(".btn");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecond = false;

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let value = button.textContent;

        // Clear everything
        if (value === "C") {
            firstNumber = "";
            secondNumber = "";
            operator = "";
            isSecond = false;
            result.value = "";
        } 

        // Backspace
        else if (value === "⌫") {
            if (!isSecond) {
                firstNumber = firstNumber.slice(0, -1);
                result.value = firstNumber;
            } else {
                secondNumber = secondNumber.slice(0, -1);
                result.value = firstNumber + " " + operator + " " + secondNumber;
            }
        } 

        // If value is operator
        else if (value === "+" || value === "-" || value === "*" || value === "/") {
            if (firstNumber !== "") {
                operator = value;
                isSecond = true;
                result.value = firstNumber + " " + operator + " ";
            }
        } 

        // If value is =
        else if (value === "=") {
            if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
                let total = 0;

                if (operator === "+") {
                    total = Number(firstNumber) + Number(secondNumber);
                } else if (operator === "-") {
                    total = Number(firstNumber) - Number(secondNumber);
                } else if (operator === "*") {
                    total = Number(firstNumber) * Number(secondNumber);
                } else if (operator === "/") {
                    total = Number(firstNumber) / Number(secondNumber);
                }

                result.value = total;
                // reset for next calculation
                firstNumber = total.toString();
                secondNumber = "";
                operator = "";
                isSecond = false;
            }
        } 

        // Numbers or dot
        else {
            if (!isSecond) {
                firstNumber = firstNumber + value;
                result.value = firstNumber;
            } else {
                secondNumber = secondNumber + value;
                result.value = firstNumber + " " + operator + " " + secondNumber;
            }
        }
    });
});
        