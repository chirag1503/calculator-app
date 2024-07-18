document.addEventListener("DOMContentLoaded", function () {
  const output = document.getElementById("output");
  const form = document.getElementById("calc_form");
  const buttons = document.querySelectorAll(".btn");

  // Prevent form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  });

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const type = button.getAttribute("data-type");
      const value = button.getAttribute("value");
      if (type === "operator") {
        handleOperator(value);
      } else if (type === "operand") {
        handleOperand(value);
      } else if (type === "clear") {
        clearOutput();
      }
    });
  });

  function handleOperator(operator) {
    if (operator === "=") {
      calculateResult();
    } else if (operator === "invert") {
      invertSign();
    } else if (operator === "%") {
      calculatePercentage();
    } else {
      output.value += operator;
    }
  }

  function handleOperand(operand) {
    if (output.value === "0" || output.value === "Error") {
      output.value = operand;
    } else {
      output.value += operand;
    }
  }

  function calculateResult() {
    try {
      output.value = eval(output.value);
    } catch (error) {
      output.value = "Error";
    }
  }

  function clearOutput() {
    output.value = "0";
  }

  function invertSign() {
    if (output.value !== "0" && output.value !== "Error") {
      output.value = parseFloat(output.value) * -1;
    }
  }

  function calculatePercentage() {
    if (output.value !== "0" && output.value !== "Error") {
      output.value = parseFloat(output.value) / 100;
    }
  }
});
