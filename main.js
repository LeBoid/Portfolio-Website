document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fade-in animation when scrolling
    const fadeInElements = document.querySelectorAll('.fade-in');

    function handleScroll() {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on page load

    // Typing Effect for Header
    const text = "Welcome to My Portfolio";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-header").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});
//DarkMode
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if dark mode was enabled previously
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️ Light Mode";
    }

    // Toggle Dark Mode
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            darkModeToggle.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            darkModeToggle.textContent = "🌙 Dark Mode";
        }
    });
});



//Modal popups
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("resumeModal");
    const viewBtn = document.getElementById("viewResumeBtn");
    const closeBtn = document.querySelector(".close-btn");

    // Open Modal on Button Click
    viewBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Close Modal on Close Button Click
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close Modal on Escape Key Press
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

    // Close Modal on Clicking Outside the Modal Content
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});




//scrolltoTopButton
const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

scrollTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//Smooth Scroll Effect to Featured Section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

//Resume expanding
document.addEventListener("DOMContentLoaded", function () {
    const expandBtn = document.getElementById("expandBtn");
    const resumeFrame = document.getElementById("resumeFrame");
    let isExpanded = false;

    expandBtn.addEventListener("click", function () {
        if (!isExpanded) {
            resumeFrame.style.position = "fixed";
            resumeFrame.style.top = "0";
            resumeFrame.style.left = "0";
            resumeFrame.style.width = "100vw";
            resumeFrame.style.height = "100vh";
            resumeFrame.style.zIndex = "9999";
            expandBtn.textContent = "Close";
        } else {
            resumeFrame.style.position = "";
            resumeFrame.style.width = "100%";
            resumeFrame.style.height = "400px";
            expandBtn.textContent = "Expand";
        }
        isExpanded = !isExpanded;
    });
});

function toggleDescription(id) {
    var element = document.getElementById(id);
    if (element) {
        element.classList.toggle('hidden');
    }
}

function toggleDescription(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.classList.contains("hidden")) {
        element.style.display = "block";
        element.classList.remove("hidden");
    } else {
        element.style.display = "none";
        element.classList.add("hidden");
    }
}

