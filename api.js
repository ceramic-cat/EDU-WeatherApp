const apiKey = "be79937bd89750df6fe78cbc16cdd92d";

function getWeather(city, displayWeatherData) {  // displayId = id of the element who shows the weather data
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())  
    .then((data) => {
      // Process and display the weather data
      console.log(data);  // For debugging
      const weatherDescription = data.weather[0].description;
      const temp = data.main.temp;
      const feels_like = data.main.feels_like;
      const humidity = data.main.humidity;
      const pressure = data.main.pressure;
      const wind = data.wind.speed;
      const icon_id = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon_id}@2x.png`

      console.log(icon_id);
      document.getElementById(displayWeatherData).innerHTML = `  
        ${city} <br>
        Weather: ${weatherDescription}<br>
        <img src="${iconUrl}" alt="Weather icon" > <br>
        Temperature: ${temp}°C<br>
        Feels like: ${feels_like}°C<br>
        Humidity: ${humidity}% <br>
        Air pressure: ${pressure} kPa<br>
        Wind: ${wind} m/s<br>
      `;
    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error);
      document.getElementById(displayWeatherData).innerHTML = "Error fetching data!";
    });
}

document.getElementById("city-dropdown-a").addEventListener("change", function () {
  getWeather(this.value, "city-display-a");
});
