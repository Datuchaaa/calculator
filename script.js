const calcDisplay = document.querySelector(".cacl-display")
const numbersBtns = document.querySelectorAll(".num")
const resetBtn = document.querySelector(".reset")

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

