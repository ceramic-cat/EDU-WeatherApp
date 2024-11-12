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
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                description: data.weather[0].description,
                temperature: `${Math.round(data.main.temp)}°C`,
                feels_like: `Känns som: ${Math.round(data.main.feels_like)}°C`,
                humidity: `Luftfuktighet: ${data.main.humidity}%`,
                pressure: `Lufttryck: ${data.main.pressure} kPa`,
                wind: `Vind: ${data.wind.speed} m/s`,
            };

            localStorage.setItem(selectId, city);   // Spara stad local storage

            // Lägg till väderinformationen (se längre ner i koden för funktionen)
            updateWeatherDisplay(containerId, weatherData);
            if (data.weather[0].id >= 200 && data.weather[0].id < 600) {
                showRandomFact();
            }
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
      notification.classList.add("show");   // Visa kattfakta

      console.log("Showing random fact:", catFact);
  
      // Hide catfact after certain time
      setTimeout(() => {
        notification.classList.remove("show");
      }, 5000);
    });}

function saveCity() {
    const savedCityA = localStorage.getItem('city-dropdown-a');
    const savedCityB = localStorage.getItem('city-dropdown-b');


    if (savedCityA) {
        document.getElementById('city-dropdown-a').value = savedCityA;
        fetchWeatherData('city-dropdown-a', 'weatherContainerA');
    }

    if (savedCityB) {
        document.getElementById('city-dropdown-b').value = savedCityB;
        fetchWeatherData('city-dropdown-b', 'weatherContainerB');
    }
}
saveCity();

const temperatureCity1 = 15; // Exempel: stad 1 är 15 grader
const temperatureCity2 = 25; // Exempel: stad 2 är 25 grader

function displayWeather() {
    // Visar väderinformationen
    document.getElementById("tempCity1").innerText = `${temperatureCity1}°C`;
    document.getElementById("tempCity2").innerText = `${temperatureCity2}°C`;

    // Fördröjning för att visa rutan efter 5 sekunder om temperaturen är under 20 grader
    setTimeout(checkTemperature, 5000);
}

function checkTemperature() {
    // Kontrollera om någon stad har en temperatur under 20 grader
    if (temperatureCity1 < 20 || temperatureCity2 < 20) {
        const dependingOnTempBox = document.getElementById("dependingOnTempBox");
        dependingOnTempBox.classList.add("show");
    }
}

window.onload = displayWeather;

// Toggle knapp för att byta tema 
const toggleSwitch = document.getElementById("toggleSwitch");
let body = document.body;

// Hämta alla sektioner
const sections = document.querySelectorAll("section"); 

// Funktion för att ändra backgrund och spara 
function themeToggle() {
    const isTropic = toggleSwitch.checked;
    localStorage.setItem("isTropic", isTropic);
    body.classList.toggle("tropic", isTropic);
    
    // Lägg till tropic på section
    sections.forEach(section => {
        if (isTropic) {
            section.classList.add("tropic");
        } else {
            section.classList.remove("tropic");
        }
    });
}

// Hämtade sparade temat
function savedTheme() {
    const isTropic = localStorage.getItem("isTropic") === "true";
    toggleSwitch.checked = isTropic;
    body.classList.toggle("tropic", isTropic);
    
    // lägg till tropic på section
    sections.forEach(section => {
        if (isTropic) {
            section.classList.add("tropic");
        } else {
            section.classList.remove("tropic");
        }
    });
}

// Event lyssnare för att växla backgrund när man klickar
toggleSwitch.addEventListener("click", themeToggle);

//Anropa
savedTheme();