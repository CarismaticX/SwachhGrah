document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:5000/api/waste")
    .then(response => response.json())
    .then(data => {
        let table = document.getElementById("wasteTable");
        data.forEach(waste => {
            let row = table.insertRow();
            row.insertCell(0).innerText = waste.type;
            row.insertCell(1).innerText = waste.weight;
            row.insertCell(2).innerText = waste.location;
            row.insertCell(3).innerText = waste.status;
        });
    })
    .catch(error => console.error("Error fetching waste data:", error));
});

const FORM_API_URL = "http://localhost:5000/api/waste/add";

// Handle form submission
document.getElementById("waste-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const wasteType = document.getElementById("wasteType").value;
    const quantity = document.getElementById("quantity").value;
    const location = document.getElementById("location").value;

    const wasteData = {
        wasteType,
        quantity: Number(quantity),
        location
    };

    try {
        const response = await fetch(FORM_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(wasteData)
        });

        const result = await response.json();
        document.getElementById("message").innerText = result.message;

        // Refresh the waste data list after submission
        fetchWasteData();

    } catch (error) {
        console.error("Error submitting waste data:", error);
        document.getElementById("message").innerText = "Error submitting data.";
    }
});

