const toggleSwitch = document.getElementById("toggleSwitch");

let background = document.body;


toggleSwitch.addEventListener("click", () => {

    background.classList.toggle("tropic");



});

// Funktion för att spara val av tema

function initializeToggleState() {
    const isTropic = localStorage.getItem("isTropic") === "true";
    toggleSwitch.checked = isTropic; // Ställer in switchen efter sparat värde
    background.classList.toggle("tropic", isTropic); // Sätter bodyns bakgrund om sparat värde är "på"
}

// Anropas varje gång switchen togglas
toggleSwitch.addEventListener("click", () => {
    const isTropic = toggleSwitch.checked;
    localStorage.setItem("isTropic", isTropic); // Sparar status i LocalStorage
    background.classList.toggle("tropic", isTropic); // Växlar klass på rubrik beroende på tillstånd
});

// Anropar initialiseringsfunktionen när sidan laddas
initializeToggleState();