const countDisplay = document.getElementById("count-display")
const btnIncrease = document.getElementById("btn-increase")
const btnDecrease = document.getElementById("btn-decrease")
const btnReset = document.getElementById("btn-reset")

let count = 0

function updateColor() {
    if(count > 0) {
        countDisplay.classList.add("positive")
        countDisplay.classList.remove("negative")
    } else if(count < 0) {
        countDisplay.classList.add("negative")
        countDisplay.classList.remove("positive")
    } else {
        countDisplay.classList.remove("positive", "negative")
    }
}


function updateDisplay() {
    countDisplay.textContent = count
    updateColor()
}

btnIncrease.addEventListener("click", () => {
    count += 1
    updateDisplay()
})

btnDecrease.addEventListener("click", () => {
    count -= 1
    updateDisplay()
})

btnReset.addEventListener("click", () => {
    count = 0
    updateDisplay()
})