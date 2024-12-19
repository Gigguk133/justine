// JavaScript to toggle the hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the form from actually submitting

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Basic form validation
            if (name && email && message) {
                alert("Message sent successfully!"); // Show success message
                contactForm.reset(); // Clear the form
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
});
