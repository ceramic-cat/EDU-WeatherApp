//Toggle knapp för att byta tema 


const toggleSwitch = document.getElementById("toggleSwitch");
let body = document.body;


// Funktion för att ändra backgrund och spara 
function themeToggle() {
    const isTropic = toggleSwitch.checked;
    localStorage.setItem("isTropic", isTropic);
    body.classList.toggle("tropic", isTropic);
}
//Hämtade sparade temat
function savedTheme() {
    const isTropic = localStorage.getItem("isTropic") === "true";
    toggleSwitch.checked = isTropic;
    body.classList.toggle("tropic", isTropic);
}

// Event lyssnare för att växla backgrund när man klickar
toggleSwitch.addEventListener("click", themeToggle);

//Anropa
savedTheme();



