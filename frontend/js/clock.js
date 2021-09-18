window.onload = displayClock();
function displayClock() {
    var display = new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();
    document.getElementById("clock").innerHTML = display;
    setTimeout(displayClock, 1000);
}
