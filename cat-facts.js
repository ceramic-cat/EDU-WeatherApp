function getCatFact() {
    const catApiUrl = "https://cat-fact.herokuapp.com/facts";
    return fetch(catApiUrl)
      .then((data) => data.json())
      .then((data) => {
        let fact = data[0].text;
        console.log("Fetched cat fact:", fact);
        return fact;
      });
  }

// Show the catfact
function showCatFact() {
    const notification = document.getElementById("cat-fact-container");
    const paragraph = document.getElementById("cat-fact-paragraph");
  
    // Call getCatFact and update paragraph after the fact is fetched
    getCatFact().then((catFact) => {
      paragraph.innerText = catFact;
      notification.classList.add("show");
      console.log("Showing cat fact:", catFact);
    });

      // Hide catfact after certain time
  setTimeout(() => {
    notification.classList.remove("show");
}, 5000);
  }



// Checking if it is raining and if it is, fetch a catfact and show it
function checkRaining() {
  let city = "Narvik";
  const apiKey = "be79937bd89750df6fe78cbc16cdd92d";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Process and display the weather data
      console.log(data); // For debugging
      const weatherCode = data.weather[0].id;
      if ((weatherCode >= 200) & (weatherCode < 600)) {
        showCatFact();
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
