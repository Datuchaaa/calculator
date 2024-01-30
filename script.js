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
let counter = 1;

numbersBtns.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += parseFloat(button.textContent);
    calcDisplay.textContent = currentInput;
  });
});

deleteBtn.addEventListener("click", () => {
  let updatedDisplay = calcDisplay.textContent.slice(0, -1);
  calcDisplay.textContent = updatedDisplay;
  console.log(updatedDisplay);
});

resetBtn.addEventListener("click", () => {
  calcDisplay.textContent = "0";
  currentInput = "";
  console.log("Reset");
});

dotBtn.addEventListener("click", () => {
  if (!currentInput.includes(".")) {
    currentInput += dotBtn.textContent;
    calcDisplay.textContent = currentInput;
  }
});

divisionBtn.addEventListener("click", () => {
  if (!currentInput.includes("/")) {
    currentInput += divisionBtn.textContent;
    calcDisplay.textContent = currentInput;
  }
});

minusBtn.addEventListener("click", () => {
  if (!currentInput.includes("-")) {
    currentInput += minusBtn.textContent;
    calcDisplay.textContent = currentInput;
  }
});

multiplyingBtn.addEventListener("click", () => {
  console.log("X");
  if (!currentInput.includes("x")) {
    currentInput += multiplyingBtn.textContent;
    calcDisplay.textContent = currentInput;
  }
});

plusBtn.addEventListener("click", () => {
  console.log("+");
  if (!currentInput.includes("+")) {
    currentInput += plusBtn.textContent;
    calcDisplay.textContent = currentInput;
  }
});

equalBtn.addEventListener("click", () => {
  console.log(currentInput);
  let output = "";
  if (currentInput.includes("+")) {
    output = currentInput.split("+");
    output = output.reduce((a, b) => {
      return Number(a) + Number(b);
    });
    console.log(output);
    calcDisplay.textContent = output;
  }

  if (currentInput.includes("/")) {
    output = currentInput.split("/");
    output = output.reduce((a, b) => {
      return Number(a) / Number(b);
    });
    console.log(output);
    calcDisplay.textContent = output;
  }

  if (currentInput.includes("-")) {
    output = currentInput.split("-");
    output = output.reduce((a, b) => {
      return Number(a) - Number(b);
    });
    console.log(output);
    calcDisplay.textContent = output;
  }

  if (currentInput.includes("x")) {
    output = currentInput.split("x");
    output = output.reduce((a, b) => {
      return Number(a) * Number(b);
    });
    calcDisplay.textContent = output;
  }
});

// theme change logic--------------------------------------

themeSwitchBtn.addEventListener("click", () => {
  console.log("Switch");

  if (counter === 3) {
    counter = 0;
  }

  if (counter === 0) {
    ovalBtn.style.transform = `translateX(${counter * 22}px)`;
    document.body.classList.remove("light", "lilac");
  } else if (counter === 1) {
    ovalBtn.style.transform = `translateX(${counter * 22}px)`;
    document.body.classList.add("light");
  } else if (counter === 2) {
    ovalBtn.style.transform = `translateX(${counter * 22}px)`;
    document.body.classList.add("lilac");
  }

  counter++;
});
// -----------------------------------------------------------
