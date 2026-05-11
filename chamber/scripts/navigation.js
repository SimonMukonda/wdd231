const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("open");
});

// Set current year for modification
document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = document.lastModified;
