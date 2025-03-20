// Load Lottie Animation as Background
lottie.loadAnimation({
    container: document.getElementById('animation-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animation.json' // Ensure this file is in the same folder as your script
});

// Ensure both clocks are hidden at the start
document.getElementById("analogClock").style.display = "none";
document.getElementById("digitalClock").style.display = "none";

// Toggle Clocks
document.getElementById("showAnalog").addEventListener("click", function() {
    document.getElementById("analogClock").style.display = "flex";
    document.getElementById("digitalClock").style.display = "none";
});

document.getElementById("showDigital").addEventListener("click", function() {
    document.getElementById("analogClock").style.display = "none";
    document.getElementById("digitalClock").style.display = "flex";
});

// Analog Clock Functionality
function updateAnalogClock() {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    let minuteDeg = (360 / 60) * minutes;
    let secondDeg = (360 / 60) * seconds;

    document.getElementById("hourHand").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minuteHand").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("secondHand").style.transform = `rotate(${secondDeg}deg)`;
}

// Digital Clock Functionality
function updateDigitalClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    let dateString = now.toDateString();

    document.getElementById("time").innerText = timeString;
    document.getElementById("date").innerText = dateString;
}

// Update clocks every second
setInterval(updateAnalogClock, 1000);
setInterval(updateDigitalClock, 1000);
