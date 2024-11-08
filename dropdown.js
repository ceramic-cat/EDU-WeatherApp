// Stad (objekt) som innehåller väderdata (nyckel)
// Här ska api:et läggas till för att hämta väderdata
const weatherData = {
	"boras": {city: "Borås"},
	"norrkoping": {city: "Norrköping"},
		"dodoma": {city: "Dodoma"},
	"zanzibar": {city: "Zanzibar"	},
};

// Funktion för att hämta objektet (staden) från "weatherData" och returnerar nyckeln (väderdatan)
// Nu är det stadens namn som hämtas, sen ska api:et läggas till för att hämta väderdata
function getWeather(city) {
	return weatherData[city];
}

// Funktion som tar emot två argument: city (staden som ska visas) och 
// cityNameElement (elementet där stadens namn ska visas)
function displayWeather(city, cityNameElement) {
	const data = getWeather(city); // Hämta väderdata för den valda staden
	cityNameElement.textContent = data.city; // Sätt stadens namn i elementet på sidan
}

// Två argument tas emot: event (valet i från dropdownen) och cityNameElement (elementet där stadens namn ska visas)
function handleDropdownChange(event, cityNameElement) {
	const selectedCity = event.target.value; // Hämta värdet på den valda staden
	if (selectedCity) { // Om en stad har valts
		displayWeather(selectedCity, cityNameElement); // Uppdatera väderinformationen för den valda staden
	}
}

// "citySelectA" och "citySelectB" är referens till dropdown-menyerna, och "cityNameElementA" och "cityNameElementB"
// är referens till html där stadens namn ska visas
const citySelectA = document.getElementById('city-dropdown-a');
const cityNameElementA = document.getElementById('city-display-a');
const citySelectB = document.getElementById('city-dropdown-b');
const cityNameElementB = document.getElementById('city-display-b');

// Vid val i någon av dropdowns anropas rätt element för att uoodatera
citySelectA.addEventListener('change', (event) => handleDropdownChange(event, cityNameElementA));
citySelectB.addEventListener('change', (event) => handleDropdownChange(event, cityNameElementB));