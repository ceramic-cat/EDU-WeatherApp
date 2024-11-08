


// Function to show the cat notification
function showCatFact() {

    
    const notification = document.getElementById("cat-fact-container");
    notification.classList.add("show");
}

// Example of checking the weather and displaying the notification
function checkRaining() {
    let city = "Stockholm";
    const apiKey = "be79937bd89750df6fe78cbc16cdd92d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())  
    .then((data) => {
      // Process and display the weather data
      console.log(data);  // For debugging
      const weatherCode = data.weather[0].id;
        if( (weatherCode >= 200) & (weatherCode < 600))
        {
            showCatFact();
            console.log("Showing catfact!")
        }
        console.log(weatherCode);

    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error);
      document.getElementById("weather-info").innerHTML = "Error fetching data!";
    });

}

// Call the checkWeather function on page load or on a regular interval
document.addEventListener("DOMContentLoaded", checkRaining);