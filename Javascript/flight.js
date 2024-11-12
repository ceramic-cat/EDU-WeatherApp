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
