const calcDisplay = document.querySelector(".cacl-display")
const numbersBtns = document.querySelectorAll(".num")
const resetBtn = document.querySelector(".reset")
const themeSwitchBtn = document.querySelector(".theme-switch-btn")
const ovalBtn = document.querySelector(".oval-btn")

let currentInput = "";
let counter = 1

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
  if ( counter === 3) {
    counter = 0
  }
  if ( counter < 3 ) {
    ovalBtn.style.transform = `translateX(${counter * 22}px)`
    document.body.classList.add("dark")
    counter++
  } 

})


