const toggleSwitch = document.getElementById("toggleSwitch");
let imgCold = document.getElementById("imgCold")
let imgWarm = document.getElementById("imgWarm")
let background = document.body;


toggleSwitch.addEventListener("click", () => {
    imgCold.classList.toggle("hide");
    imgWarm.classList.toggle("show");

    background.classList.toggle("tropic");



});

// Funktion för att spara val av tema

function saveToggleState() {
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
saveToggleState();