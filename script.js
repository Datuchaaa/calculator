document.addEventListener("DOMContentLoaded", function () {
  const calcDisplay = document.querySelector(".calc-display");
  const numbersBtns = document.querySelectorAll(".num");
  const resetBtn = document.querySelector(".reset");
  const themeSwitchBtn = document.querySelector(".theme-switch-btn");
  const ovalBtn = document.querySelector(".oval-btn");
  const dotBtn = document.querySelector(".dot");
  const divisionBtn = document.querySelector(".division");
  const minusBtn = document.querySelector(".minus");
  const multiplyingBtn = document.querySelector(".multiplying");
  const equalBtn = document.querySelector(".equals");
  const plusBtn = document.querySelector(".plus");
  const deleteBtn = document.querySelector(".delete");

  let currentInput = "";
  let counter = 0;

  const updateDisplay = () => {
    const maxLength = 15;
    if (currentInput.length > maxLength) {
      currentInput = currentInput.slice(0, maxLength);
    }
    calcDisplay.textContent = currentInput;
  };

  const handleNumberClick = (button) => {
    currentInput += parseFloat(button.textContent);
    updateDisplay();
  };


  

  

  numbersBtns.forEach((button) => {
    button.addEventListener("click", () => {
      handleNumberClick(button);
    });
  });

  deleteBtn.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  });

  resetBtn.addEventListener("click", () => {
    calcDisplay.textContent = "0";
    currentInput = "";
  });

  const handleOperationClick = (operation) => {
    if (!currentInput.includes(operation)) {
      currentInput += operation;
      updateDisplay();
    }
  };

  dotBtn.addEventListener("click", () => {
    if (!currentInput.includes(".")) {
      currentInput += dotBtn.textContent;
      updateDisplay();
    }
  });

  divisionBtn.addEventListener("click", () => {
    handleOperationClick("/");
  });

  minusBtn.addEventListener("click", () => {
    handleOperationClick("-");
  });

  multiplyingBtn.addEventListener("click", () => {
    handleOperationClick("x");
  });

  plusBtn.addEventListener("click", () => {
    handleOperationClick("+");
  });

  equalBtn.addEventListener("click", () => {
    const operators = ["+", "-", "/", "x"];

    for (const operator of operators) {
      if (currentInput.includes(operator)) {
        const output = currentInput.split(operator).reduce((a, b) => {
          switch (operator) {
            case "+":
              return Number(a) + Number(b);
            case "-":
              return Number(a) - Number(b);
            case "/":
              return Number(a) / Number(b);
            case "x":
              return Number(a) * Number(b);
            default:
              return currentInput;
          }
        });

        currentInput = output.toString();
        updateDisplay();
        break;
      }
    }
  });

  themeSwitchBtn.addEventListener("click", () => {
    counter = (counter + 1) % 3;
    const themeClasses = ["", "light", "lilac"];
    ovalBtn.style.transform = `translateX(${counter * 22}px)`;
    document.body.className = themeClasses[counter];
  });
});
