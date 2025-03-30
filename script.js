// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Preserve dark mode setting
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Handle Waste Data Submission
document.getElementById('waste-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const wasteType = document.getElementById('wasteType').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;

    fetch('http://localhost:5000/api/waste/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ wasteType, quantity, location })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = 'Waste data submitted!';
        document.getElementById('waste-form').reset();
    })
    .catch(error => console.error('Error:', error));
});

document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".mySlides");

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.opacity = index === slideIndex ? "1" : "0";
        });

        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 3000);
    }

    showSlides();
});

// Slideshow Animation
let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === slideIndex) slide.classList.add("active");
    });
    slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 3000);

document.querySelector(".prev")?.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
});

document.querySelector(".next")?.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
});

// Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 100;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});



