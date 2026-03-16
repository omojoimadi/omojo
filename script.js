// auto year
document.getElementById("year").textContent = new Date().getFullYear();

// typing animation
const text = "victory@omojo:~$";
const target = document.querySelector(".hero-prompt-text");
let i = 0;

function type() {
    if (i < text.length) {
        target.textContent += text[i];
        i++;
        setTimeout(type, 80);
    }
}

window.addEventListener("load", () => {
    target.textContent = "";
    type();
});

// scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));