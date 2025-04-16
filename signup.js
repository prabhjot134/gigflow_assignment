document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const thankYou = document.getElementById('thank-you');
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const skillInput = document.getElementById('skill');
    const portfolioInput = document.getElementById('portfolio');
    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const skillError = document.getElementById('skill-error');
    const portfolioError = document.getElementById('portfolio-error');
    
    nameInput.addEventListener('blur', function() {
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            nameInput.style.borderColor = '#e74c3c';
        } else {
            nameError.style.display = 'none';
            nameInput.style.borderColor = '#ddd';
        }
    });
    
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
    
    skillInput.addEventListener('change', function() {
        if (skillInput.value === '') {
            skillError.style.display = 'block';
            skillInput.style.borderColor = '#e74c3c';
        } else {
            skillError.style.display = 'none';
            skillInput.style.borderColor = '#ddd';
        }
    });
    
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
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            nameInput.style.borderColor = '#e74c3c';
            isValid = false;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#e74c3c';
            isValid = false;
        }
        
        if (skillInput.value === '') {
            skillError.style.display = 'block';
            skillInput.style.borderColor = '#e74c3c';
            isValid = false;
        }
        
        const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (!urlPattern.test(portfolioInput.value)) {
            portfolioError.style.display = 'block';
            portfolioInput.style.borderColor = '#e74c3c';
            isValid = false;
        }
        
        if (isValid) {
            form.style.display = 'none';
            thankYou.style.display = 'block';
        }
    });
});