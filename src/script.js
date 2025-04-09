// script.js
function getWeather() {
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = "YOUR_API_KEY";
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const desc = data.weather[0].description;
            document.getElementById('weather-result').innerText = `Temp: ${temp}°C, ${desc}`;
        })
        .catch(error => console.log(error));
}

