var num1, num2;
var op, result;

function calculate(num1, num2, op) {
    "use strict";
    if (op === "+") {
        result = num1 + num2;
    } else if (op === "-") {
        result = num1 - num2;
    } else if (op === "*") {
        result = num1 * num2;
    } else if (op === "/") {
        result = num1 / num2;
    } else {
        result = "Incorrect input!";
    }

    alert("The answer is " + result, "Result");
}

function getValues() {
    "use strict";
    num1 = Number(prompt("Enter your first number.", "First number..."));
    num2 = Number(prompt("Enter your second number.", "Second number..."));
    op = prompt("Choose you operator. ", "+, -, * or /");
    
    calculate(num1, num2, op);
}
