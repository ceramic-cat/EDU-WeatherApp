
const apiKey = "be79937bd89750df6fe78cbc16cdd92d";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=${apiKey}&units=metric`;

function getWeather() {
  fetch(apiUrl)
    .then((response) => response.json())  
    .then((data) => {
      // Process and display the weather data
      console.log(data);  // For debugging
      const weatherDescription = data.weather[0].description;
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      document.getElementById("print-out").innerHTML = `
        Weather: ${weatherDescription}<br>
        Temperature: ${temp}°C<br>
        Humidity: ${humidity}%
      `;
    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error);
      document.getElementById("weather-info").innerHTML = "Error fetching data!";
    });
}

// Call the function to fetch weather data
getWeather();
