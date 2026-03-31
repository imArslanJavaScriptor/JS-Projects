const inputCelsius = document.getElementById("input-celsius")
const inputFahrenheit = document.getElementById("input-fahrenheit")
const resultKelvin = document.getElementById("result-kelvin")
const resultFahrenheit = document.getElementById("result-fahrenheit")
const resultCelsius = document.getElementById("result-celsius")

function celsiusToFahrenheit(celsius) {
    let result = (celsius * 9/5) + 32
    return result.toFixed(2)
}

function celsiusToKelvin(celsius) {
    let result = celsius + 273.15
    return result.toFixed(2)
}

function fahrenheitToCelsius (fahrenheit) {
    let result = (fahrenheit - 32) * 5/9
    return result.toFixed(2)
}


inputCelsius.addEventListener("input", (event) => {
    let value = parseFloat(event.target.value)
    resultFahrenheit.textContent = celsiusToFahrenheit(value)
    resultKelvin.textContent = celsiusToKelvin(value)
}) 

inputFahrenheit.addEventListener("input", (event) => {
    let value = parseFloat(event.target.value)
    let celsius = fahrenheitToCelsius(value)
    resultCelsius.textContent = celsius
    resultKelvin.textContent = celsiusToKelvin(parseFloat(celsius))
})