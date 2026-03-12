let counterValue = document.getElementById("count")
const incrementBtn = document.getElementById("increment")
const decrementBtn = document.getElementById("decrement")
const resetBtn = document.getElementById("reset")

let count = 0

function updateUI (color = "#fff"){
  counterValue.textContent = count
  counterValue.style.color = color
}


updateUI("#fefefe")


incrementBtn.addEventListener("click", () => {
  count++
  updateUI("#4ecca3")
})


decrementBtn.addEventListener("click", () => {
  if(count > 0) {
    count--
  }
  updateUI("#e94560")
})

resetBtn.addEventListener("click", () => {
  count = 0
  updateUI("#fff")
})