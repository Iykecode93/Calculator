const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Defined a function to calculate based on button clicked.
const calculate = (btnvalue) => {
    if (btnvalue === "=" && btnvalue !== "") {
        // If output has "%", replace with "/100" before evaluating.
        output = eval(output.replace("%",/100))
    }
    display.value = output
}

// Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
    // Button click listener calls calculate() with dataset value as argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))
}) 