// SOS Button Interaction
document.getElementById("sos-button").addEventListener("click", function() {
    this.style.backgroundColor = "#ff0000";
    alert("SOS sent! Help is on the way.");
});

// Simulate Mesh Network Hops
let hops = 0;
function simulateMessageHop() {
    hops++;
    const chat = document.getElementById("chat-messages");
    const newMessage = document.createElement("div");
    newMessage.className = "message";
    newMessage.textContent = `Message passed through ${hops} devices`;
    chat.appendChild(newMessage);
}

// Initialize Map
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add a sample hazard marker
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Flood zone detected!');