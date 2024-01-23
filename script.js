const calcDisplay = document.querySelector(".calc-display");
const numbersBtns = document.querySelectorAll(".num");
const resetBtn = document.querySelector(".reset");
const themeSwitchBtn = document.querySelector(".theme-switch-btn");
const ovalBtn = document.querySelector(".oval-btn");

let currentInput = "";
let counter = 1;

numbersBtns.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    calcDisplay.textContent = currentInput;
  });
});

resetBtn.addEventListener("click", () => {
  calcDisplay.textContent = "0";
  currentInput = "";
  console.log("Reset");
});

themeSwitchBtn.addEventListener("click", () => {
  console.log("Switch");
  
  if (counter === 3) {
    counter = 0;
  }

  if (counter === 0) {
    ovalBtn.style.transform = `translateX(${counter * 22}px)`;
    document.body.classList.remove("dark", "lilac");
  } else if (counter === 1) {
    ovalBtn.style.transform = `translateX(${counter * 22}px)`;
    document.body.classList.add("dark");
  } else if (counter === 2) {
    ovalBtn.style.transform = `translateX(${counter * 22}px)`;
    document.body.classList.add("lilac");
  }

  counter++;
});
