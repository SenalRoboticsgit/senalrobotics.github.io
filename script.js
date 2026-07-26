// Senal Robotics JavaScript

console.log("🤖 Senal Robotics Website Loaded Successfully!");

// Welcome Message
window.onload = function () {
    alert("🤖 Welcome to Senal Robotics!");
};

// Smooth animation for project cards
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px) scale(1)";
    });

});
