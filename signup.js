document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const thankYou = document.getElementById('thank-you');
    
    // Input fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const skillInput = document.getElementById('skill');
    const portfolioInput = document.getElementById('portfolio');
    
    // Error messages
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const skillError = document.getElementById('skill-error');
    const portfolioError = document.getElementById('portfolio-error');
    
    // Validate name
    nameInput.addEventListener('blur', function() {
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            nameInput.style.borderColor = '#e74c3c';
        } else {
            nameError.style.display = 'none';
            nameInput.style.borderColor = '#ddd';
        }
    });
    
    // Validate email
    emailInput.addEventListener('blur', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#e74c3c';
        } else {
            emailError.style.display = 'none';
            emailInput.style.borderColor = '#ddd';
        }
    });
    
    // Validate skill
    skillInput.addEventListener('change', function() {
        if (skillInput.value === '') {
            skillError.style.display = 'block';
            skillInput.style.borderColor = '#e74c3c';
        } else {
            skillError.style.display = 'none';
            skillInput.style.borderColor = '#ddd';
        }
    });
    
    // Validate portfolio link
    portfolioInput.addEventListener('blur', function() {
        const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (!urlPattern.test(portfolioInput.value)) {
            portfolioError.style.display = 'block';
            portfolioInput.style.borderColor = '#e74c3c';
        } else {
            portfolioError.style.display = 'none';
            portfolioInput.style.borderColor = '#ddd';
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Check all validations
        let isValid = true;
        
        // Name validation
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            nameInput.style.borderColor = '#e74c3c';
            isValid = false;
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#e74c3c';
            isValid = false;
        }
        
        // Skill validation
        if (skillInput.value === '') {
            skillError.style.display = 'block';
            skillInput.style.borderColor = '#e74c3c';
            isValid = false;
        }
        
        // Portfolio validation
        const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (!urlPattern.test(portfolioInput.value)) {
            portfolioError.style.display = 'block';
            portfolioInput.style.borderColor = '#e74c3c';
            isValid = false;
        }
        
        // If all validations pass, show thank you message
        if (isValid) {
            form.style.display = 'none';
            thankYou.style.display = 'block';
            
            // In a real application, you would send the form data to the server here
            console.log({
                name: nameInput.value,
                email: emailInput.value,
                skill: skillInput.value,
                portfolio: portfolioInput.value
            });
        }
    });
});