function convertWasteToEnergy() {
    const wasteKg = parseFloat(document.getElementById('wasteKg').value);
    if (isNaN(wasteKg) || wasteKg <= 0) {
        alert('Please enter a valid amount of waste in kilograms.');
        return;
    }
    
    const energyPerKg = 2.6; // kWh of energy produced per kg of waste
    const energyProduced = (wasteKg * energyPerKg).toFixed(2);
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>${wasteKg} kg of waste can produce approximately <strong>${energyProduced} kWh</strong> of energy in a landfill.</p>
    `;
}