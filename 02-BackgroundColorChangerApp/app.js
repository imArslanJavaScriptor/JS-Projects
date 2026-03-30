const colorDisplay = document.getElementById("color-display")
const changeBtn = document.getElementById("btn-change")

const hexChars = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]

function generateColor() {
    let color = ""
    for(let i=0; i<6; i++) {
        color += hexChars[Math.floor(Math.random() * hexChars.length)]
    }
    return color
}

changeBtn.addEventListener("click", () => {
    let result = generateColor()
    document.body.style.backgroundColor = `#${result}`
    colorDisplay.textContent = `#${result}`
})