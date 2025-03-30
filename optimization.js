let map, marker;

function startTracking() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    // Initialize the map
    map = L.map('map').setView([0, 0], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Track user position
    navigator.geolocation.watchPosition(updatePosition, handleError, {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000
    });
}

function updatePosition(position) {
    const { latitude, longitude } = position.coords;

    if (!marker) {
        marker = L.marker([latitude, longitude], {icon: greenIcon}).addTo(map)
            .bindPopup("📍 Your Location")
            .openPopup();
    } else {
        marker.setLatLng([latitude, longitude]);
    }

    map.setView([latitude, longitude], 13);
}

function handleError(error) {
    alert("Error getting location: " + error.message);
}

// Custom Green Marker
const greenIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Green pin icon
    iconSize: [30, 40], 
    iconAnchor: [15, 40], 
    popupAnchor: [0, -35] 
});