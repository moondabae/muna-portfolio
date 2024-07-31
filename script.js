document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_v066n8l', 'template_xkt9kjq', this)
        .then(function() {
            alert('Your message has been sent successfully!');
        }, function(error) {
            alert('Failed to send your message. Please try again.');
        });
});
