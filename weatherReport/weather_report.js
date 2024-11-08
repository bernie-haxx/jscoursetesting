function showCityWeatherDetails(event) {
    // prevent the detault behavior of an event
    event.preventDefault();
    // Go to the OpenWeather API https://openweathermap.org/
    // You can get the free API to get current weather data and a 
    // newly generated API Key.
    const city = document.getElementById('city').value;
    const apiKey = 'insert-api-here';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('WeatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        })
}

function showLongLatWeatherDetails(event) {
    // prevent the detault behavior of an event
    event.preventDefault();
    // Go to the OpenWeather API https://openweathermap.org/
    // You can get the free API to get current weather data and a 
    // newly generated API Key.
    const lon = document.getElementById('longitude').value;
    const lat = document.getElementById('latitude').value;
    const apiKey = 'insert-api-here';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metrics`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo2');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('WeatherInfo2');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        })
}

document.getElementById('weatherForm').addEventListener('submit', showCityWeatherDetails );
document.getElementById('weatherForm2').addEventListener('submit', showLongLatWeatherDetails );