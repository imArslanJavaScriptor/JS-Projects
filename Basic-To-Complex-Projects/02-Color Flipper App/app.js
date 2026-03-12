const hexCodeDiv = document.getElementById("hex-code")
const flipBtn = document.getElementById("flip-btn")

let randomColorsArray = [
  "#e74c3c",
  "#3498db",
  "#2ecc71",
  "#f39c12",
  "#9b59b6",
  "#1abc9c",
  "#e67e22",
  "#e91e63",
  "#00bcd4",
  "#8bc34a",
];


flipBtn.addEventListener("click", () => {
  let randomColor = Math.floor(Math.random() * randomColorsArray.length)
  hexCodeDiv.textContent = randomColorsArray[randomColor]
  document.body.style.backgroundColor = randomColorsArray[randomColor]
})