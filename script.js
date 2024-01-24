const calcDisplay = document.querySelector(".cacl-display")
const numbersBtns = document.querySelectorAll(".num")
const resetBtn = document.querySelector(".reset")
const themeSwitchBtn = document.querySelector(".theme-switch-btn")
const ovalBtn = document.querySelector(".oval-btn")
const dotBtn = document.querySelector(".dot")
const divisionBtn = document.querySelector(".division")
const minusBtn = document.querySelector(".minus")

let currentInput = "";
let counter = 1

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


dotBtn.addEventListener("click", () => {
    currentInput += dotBtn.textContent;
    calcDisplay.textContent = currentInput;
  });

  divisionBtn.addEventListener("click", () => {
    currentInput += divisionBtn.textContent;
    calcDisplay.textContent = currentInput;
  });
  minusBtn.addEventListener("click", () => {
    currentInput += minusBtn.textContent;
    calcDisplay.textContent = currentInput;
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
