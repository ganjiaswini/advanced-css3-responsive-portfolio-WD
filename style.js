// ===============================
// Dark Mode Toggle
// ===============================

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});

// ===============================
// Smooth Scroll for Navigation
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===============================
// Contact Form Alert
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();
});

// ===============================
// Reveal Animation on Scroll
// ===============================

const revealElements = document.querySelectorAll(
    ".about, .skill-card, .project-card, .contact"
);

function revealOnScroll() {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);