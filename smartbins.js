function calculateBinStatus() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location.');
        return;
    }

    // Mocked bin status data
    const active = Math.floor(Math.random() * 20 + 10);
    const inactive = Math.floor(Math.random() * 10 + 5);
    const filled = Math.floor(Math.random() * 15 + 5);
    const damaged = Math.floor(Math.random() * 5 + 1);

    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = `
        <p><strong>Location:</strong> ${location}</p>
        <p>Active Bins: ${active}</p>
        <p>Inactive Bins: ${inactive}</p>
        <p>Filled Bins: ${filled}</p>
        <p>Damaged Bins: ${damaged}</p>
    `;
}