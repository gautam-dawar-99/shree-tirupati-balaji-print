// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic Typing Effect
const typingText = "Welcome to Shree Tirupati Balaji Print";
let index = 0;
const typingSpeed = 100; // Speed in milliseconds

function typeText() {
    if (index < typingText.length) {
        document.getElementById("typing-effect").textContent += typingText.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 500);
});

// Contact Form Validation
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let name = document.querySelector("input[type='text']").value.trim();
    let email = document.querySelector("input[type='email']").value.trim();
    let message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    alert("Message sent successfully!");
    document.querySelector("form").reset();
});


let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100 + "%";
    document.querySelector(".carousel-images").style.transform = `translateX(${offset})`;

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index - 1);
}

// Auto-slide every 3 seconds
setInterval(() => moveSlide(1), 3000);

// Back Button Functionality
function goBack() {
    window.history.back(); // Returns to the previous page
}

// Initial setup
showSlide(0);
