const apiKey = "be79937bd89750df6fe78cbc16cdd92d";

function fetchWeatherData(selectId, containerId) {
  const city = document.getElementById(selectId).value;
  if (!city) return;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())  
    .then((data) => {
      // Process and display the weather data
      console.log(data);  // For debugging
      const weatherData = {
        city: data.name,
        description: data.weather[0].description,
                temperature: `${data.main.temp}°C`,
                feels_like: `${data.main.feels_like}°C`,
                humidity: `${data.main.humidity}%`,
                pressure: `${data.main.pressure} kPa`,
                wind: `${data.wind.speed} m/s`,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };
    updateWeatherDisplay(containerId, weatherData);
  })
  .catch((error) => {
    console.error("Error fetching weather data: ", error);
    alert("Error fetching data for " + city);
});
}

function updateWeatherDisplay(containerId, weatherData) {
  const container = document.getElementById(containerId);

  Object.keys(weatherData).forEach((key) => {
    const element = container.querySelector(`[data-weather="${key}"]`);
    if (key === "icon" && element) {
        element.src = weatherData[key];
    } else if (element) {
        element.textContent = weatherData[key];
    }
});
}