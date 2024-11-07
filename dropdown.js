// Test för att se om scriptet laddas, (haft problem med det) -esl
console.log("Dropdown script loaded");

const citySelectA = document.getElementById('city-dropdown-a');
const cityNameElementA = document.getElementById('city-display-a');
const temperatureElementA = document.getElementById('temperature-display-a');

// Statisk data för att testa. Här i görs API-anropet sen -esl
function getWeatherA(city) {
	const data = {
		"boras": { city: "Borås" },
		"norrkoping": { city: "Norrköping" },
		"dodoma": { city: "Dodoma" },
		"zanzibar": { city: "Zanzibar" },
	};
	return data[city]
}

function displayWeatherA(city) {
	const data = getWeatherA(city);
	cityNameElementA.textContent = `${data.city}` ; // Skriv ut stadens namn -esl
}

// Ta emot valet i dropdown, anropa displayWeather -esl
citySelectA.addEventListener("change", (event) => {
	const citySelectedA = event.target.value;
	displayWeatherA(citySelectedA);
});