const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = " ";

// Defined a function to calculate based on button clicked.
const calculate = (btnvalue) => {
  if (btnvalue === "=" && output !== "") {
    // If output has "%", replace with "/100" before evaluating.
    output = eval(output.replace("%", "/100"));
  } else if (btnvalue === "AC") {
    output = " ";
  } else if (btnvalue === "DEL") {
    // If DEL button is clicked, remove the last character form the output
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnvalue)) return;
    output += btnvalue;
  }

  display.value = output;
};

// Added event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  // Button click listener calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
