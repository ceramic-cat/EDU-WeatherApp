
const apiKey = "be79937bd89750df6fe78cbc16cdd92d";

getWeather();

function getWeather() {
  const city = "Stockholm";
  const currentWeatherUrl = `https://api.operweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(currentWeatherUrl)
    .then((respone) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error);
      alert("Error fetching data!");
    });
}

function displayWeather(data) {
  const weatherInfoDiv = document.getElementById("weather-info");
  const weatherPrintDiv = document.getElementById("print-out");
  weatherInfoDiv.innerHTML = "";

  if (data.cod === 404) {
    weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
  } else {
    const cityName = data.name;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;

    weatherPrintDiv.innerHTML=`<p>${cityName}</p> <p>${temperature}</p> <p>${description}</p>`
    
  }
}
