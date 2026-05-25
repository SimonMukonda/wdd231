// Timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Modal open logic
document.querySelectorAll("[data-modal]").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.getElementById(link.dataset.modal).showModal();
    });
});

// close logic
document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.close();
    });
});


