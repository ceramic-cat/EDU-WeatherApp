function getRandomFact() {
  const factApiUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";
  return fetch(factApiUrl)
    .then((data) => data.json())
    .then((data) => {
      let fact = data.text;
      console.log("Fetched random fact:", fact);
      return fact;
    })
    .catch((error) => {
      console.error("Unable to get a random fact: ", error);
      return "No random facts available at this time! 😿";
    });
}

// Show the catfact
function showRandomFact() {
  const notification = document.getElementById("cat-fact-container");
  const paragraph = document.getElementById("cat-fact-paragraph");

  // Call getCatFact and update paragraph after the fact is fetched
  getRandomFact().then((catFact) => {
    paragraph.innerText = catFact;
    notification.classList.add("show");
    console.log("Showing random fact:", catFact);

    // Hide catfact after certain time
    setTimeout(() => {
      notification.classList.remove("show");
    }, 5000);
  });
}

// Checking if it is raining and if it is, fetch a catfact and show it
function checkRaining() {
  let city = "Columbus";
  const apiKey = "be79937bd89750df6fe78cbc16cdd92d";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Process and display the weather data
      console.log(data); // For debugging
      const weatherCode = data.weather[0].id;
      if (weatherCode >= 200 && weatherCode < 600) {
        showRandomFact();
        console.log("Showing catfact!");
      }
      console.log(weatherCode);
    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error);
      document.getElementById("weather-info").innerHTML =
        "Error fetching data!";
    });
}

// Call the checkWeather function on page load or on a regular interval
document.addEventListener("DOMContentLoaded", checkRaining);
