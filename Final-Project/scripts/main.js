const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// wayfinding
const links = document.querySelectorAll("nav a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Set last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Set current year for modification
document.getElementById("year").textContent = new Date().getFullYear();