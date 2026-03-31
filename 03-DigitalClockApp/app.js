document.addEventListener("DOMContentLoaded", () => {
    const timeDisplay = document.getElementById("time-display")
    const dateDisplay = document.getElementById("date-display")
    const ampmDisplay = document.getElementById("ampm-display")

    function addZero(num) {
        return num < 10 ? `0${num}` : num
    }

    function updateClock() {
        let date = new Date()
        let hour = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let ampm = ""
        hour < 12 ? ampm = "AM" : ampm = "PM"
        hour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour

        hour = addZero(hour)
        minutes = addZero(minutes)
        seconds = addZero(seconds)

        timeDisplay.textContent = `${hour} : ${minutes} : ${seconds}`
        ampmDisplay.textContent = ampm
        dateDisplay.textContent = date.toDateString()
    }
    updateClock()
    setInterval(updateClock, 1000)
})
