document.getElementById('membershipForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to handle with JS

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const membershipType = document.getElementById('membershipType').value;
    const startDate = document.getElementById('startDate').value;

    // Basic validation (not empty)
    if (!firstName || !lastName || !email || !phone || !membershipType || !startDate) {
        alert("Please fill in all the fields.");
        return;
    }

    // Here, you would typically send the form data to a server via AJAX (e.g., using fetch or XMLHttpRequest)
    alert(`Registration successful!\nWelcome, ${firstName} ${lastName}. Your membership type is ${membershipType}.`);
    
    // Clear the form after successful registration
    document.getElementById('membershipForm').reset();
});
