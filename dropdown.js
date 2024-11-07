// Test för att se om scriptet laddas, (haft problem med det) -esl
console.log("Dropdown script loaded");

// Dropdown A -
const citySelectA = document.getElementById('city-dropdown-a');
const cityNameElementA = document.getElementById('city-display-a');
const temperatureElementA = document.getElementById('temperature-display-a');

// Dropdown B 
const citySelectB = document.getElementById('city-dropdown-b');
const cityNameElementB = document.getElementById('city-display-b');
const temperatureElementB = document.getElementById('temperature-display-b');

// Statisk data för att testa. Här i görs API-anropet sen 
function getWeatherA(city) {
	const data = {
		"boras": { city: "Borås" },
		"norrkoping": { city: "Norrköping" },
		"dodoma": { city: "Dodoma" },
		"zanzibar": { city: "Zanzibar" },
	};
	return data[city]
}

// Statisk data för att testa. Här i görs API-anropet sen 
function getWeatherB(city) {
	const data = {
		"boras": { city: "Borås" },
		"norrkoping": { city: "Norrköping" },
		"dodoma": { city: "Dodoma" },
		"zanzibar": { city: "Zanzibar" },
	};
	return data[city]
}

// Funktion för att uppdatera med vald stad 
function displayWeatherA(city) {
	const data = getWeatherA(city);
	cityNameElementA.textContent = `${data.city}` ; // Skriv ut stadens namn 
}
// Funktion för att uppdatera med vald stad 
function displayWeatherB(city) {
	const data = getWeatherB(city);
	cityNameElementB.textContent = `${data.city}` ; // Skriv ut stadens namn 
}

// Ta emot valet i dropdown, anropa displayWeather 
citySelectA.addEventListener("change", (event) => {
	const citySelectedA = event.target.value;
	displayWeatherA(citySelectedA);
});

// Ta emot valet i dropdown, anropa displayWeather 
citySelectB.addEventListener("change", (event) => {
	const citySelectedB = event.target.value;
	displayWeatherB(citySelectedB);
});