// Contact Form Module

export function setupContactForm() {
    const form = document.getElementById('contact-form');
    const result = document.getElementById('form-result');
    const submitBtn = document.getElementById('submit-btn');
    const originalBtnText = submitBtn.innerHTML;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 1. Basic Client-Side Validation
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        
        // Simple Regex for email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(object.email)) {
            showResult('Please enter a valid email address.', 'text-red-600');
            return;
        }

        // 2. Loading State
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
        `;
        result.classList.add('hidden');

        // 3. Send Data to Web3Forms
        const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                // Success
                showResult('Message sent successfully! I will get back to you soon.', 'text-green-600');
                form.reset();
            } else {
                // Error from server
                console.log(response);
                showResult(json.message || 'Something went wrong.', 'text-red-600');
            }
        })
        .catch(error => {
            // Network Error
            console.log(error);
            showResult('Failed to send message. Please try again later.', 'text-red-600');
        })
        .finally(() => {
            // Reset Button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            
            // Re-render icons since we overwrote HTML
            if(window.lucide) window.lucide.createIcons();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                result.classList.add('hidden');
            }, 5000);
        });
    });

    function showResult(message, colorClass) {
        result.innerHTML = message;
        result.className = `text-center text-sm font-medium mt-3 ${colorClass}`;
        result.classList.remove('hidden');
    }
}