const calcDisplay = document.querySelector(".cacl-display")
const numbersBtns = document.querySelectorAll(".num")
const resetBtn = document.querySelector(".reset")
const themeSwitchBtn = document.querySelector(".oval-btn")

let currentInput = "";

  numbersBtns.forEach(button => {
    button.addEventListener("click", () => {
      currentInput += button.textContent;
      calcDisplay.textContent = currentInput;
    });
  });

resetBtn.addEventListener("click", () => {
    calcDisplay.textContent = "0"
    currentInput = ""
    console.log("Ddddd")
})

themeSwitchBtn.addEventListener("click", () => {
  console.log("Swith")
  themeSwitchBtn.classList.add("oval-btn-2")
})

