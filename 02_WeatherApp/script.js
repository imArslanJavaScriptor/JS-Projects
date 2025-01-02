document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input")    
    const getWeatherBtn = document.getElementById("get-weather-btn")
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("city-name")
    const temperatureDisplay = document.getElementById("temperature")
    const descriptionDisplay = document.getElementById("description")
    const errorMessage = document.getElementById("error-message")

    const API_KEY = "706e259ab8fb31a1827d3a6ef48c9845" // env Variables
    getWeatherBtn.addEventListener("click", async () => {
        const cityName = cityInput.value.trim()
        if(!cityName) return

        // Remember!
        // it may throw an error
        // server/database is always in another continent
        
        try {
            const weatherData = await fetchWeatherData(cityName)
            displayWeatherData(weatherData)
        } catch (error) {
            showError()
        }
    })

    async function fetchWeatherData(city) {
        // Get Data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        let response = await fetch(url)
        console.log(typeof response)
        console.log("Response ", response)

        if(!response.ok) {
            console.error("City Data Not Found")
        }
        const data = await response.json()
        return data
    }

    fetchWeatherData("Lahore")

    function displayWeatherData(data) {
        console.log(data)
        const {name, main, weather} = data
        cityNameDisplay.textContent = name
        weatherInfo.classList.remove("hidden")
        temperatureDisplay.textContent = `Temprature: ${main.temp}`
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`

    }

    function showError() {
        weatherInfo.classList.remove("hidden")
        errorMessage.classList.add("hidden")
    }
})
