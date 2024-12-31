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
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon=${city}&exclude={part}&appid=${API_KEY}`
        console.log(url)
    }

    fetchWeatherData("Lahore")

    function displayWeatherData(weatherData) {
        // Display Data
    }

    function showError() {
        weatherInfo.classList.add("hidden")
        errorMessage.classList.remove("hidden")
    }



})