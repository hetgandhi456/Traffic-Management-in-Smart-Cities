// You can add JavaScript for interactive features here.
// For example, to handle form submissions or simple animations.

console.log("JavaScript is connected!");

// Example: Adding a simple alert on form submission (for demonstration only)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert('Message sent! (This is a demo)');
        // In a real scenario, you would handle the form data submission here.
    });
}

const feedbackForm = document.querySelector('.feedback-section button');
if (feedbackForm) {
    feedbackForm.addEventListener('click', function() {
        const feedbackTextarea = document.querySelector('.feedback-section textarea');
        if (feedbackTextarea.value.trim() !== "") {
            alert('Feedback submitted! (This is a demo)');
            feedbackTextarea.value = ""; // Clear the textarea
        } else {
            alert('Please enter your feedback.');
        }
    });
}

// You can add more interactive features as needed, such as:
// - Image carousels on the home page or case studies
// - Dropdown menus in the navigation (if you have sub-pages)
// - Animations on scroll or hover  