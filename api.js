const apiKey = "be79937bd89750df6fe78cbc16cdd92d";

// selectId = ta emot val i dropdown menyerna
// containerId = elementet där väderinformationen ska visas
function fetchWeatherData(selectId, containerId) {
  const city = document.getElementById(selectId).value;
  if (!city) return; // Är ingen stad vald, händer inget och funktionen avslutas

  // apiUrl = anropar apiet för att hämta väderdata för vald stad
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Begär väderdata från OpenWeatherMap API
  fetch(apiUrl)
    .then((response) => response.json()) // Svaret från apiet knventeras till json

    .then((data) => {
      // När datan är konverterad till json får vi väderinformationen

      console.log(data); // For debugging
      const weatherData = {
        city: data.name,
        description: data.weather[0].description,
        temperature: `${data.main.temp}°C`,
        feels_like: `${data.main.feels_like}°C`,
        humidity: `${data.main.humidity}%`,
        pressure: `${data.main.pressure} kPa`,
        wind: `${data.wind.speed} m/s`,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      };

      // Lägg till väderinformationen (se längre ner i koden för funktionen)
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
      // Är det en bild som ska visas sätts src-attributet till urln för bilden
      element.src = weatherData[key];
    } else if (element) {
      // Elemnen som inte är bilder får texten satt till värdet (te.x temperatur)
      element.textContent = weatherData[key];
    }
  });
}
