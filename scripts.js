document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".newsletter form");
  const emailInput = document.getElementById("email");
  const messageDiv = document.querySelector(".newsletter .message");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = emailInput.value.trim();

    if (email) {
      messageDiv.innerHTML = `Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`;
    } 
    
    else {
      messageDiv.textContent = "Please enter a valid email address.";
    }
    
  });
  
});
