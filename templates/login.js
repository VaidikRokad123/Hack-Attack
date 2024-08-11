const form = document.querySelector('form[name="signupForm"]');
        const nameInput = document.querySelector('input[name="name"]');
        const dobInput = document.querySelector('input[name="dob"]');
        const emailInput = document.querySelector('input[name="email"]');
        const phoneInput = document.querySelector('input[name="phone"]');
        const addressInput = document.querySelector('input[name="address"]');
        const citySelect = document.querySelector('select[name="city"]');
        const pincodeInput = document.querySelector('input[name="pincode"]');
        const passwordInput = document.querySelector('input[name="password"]');
        const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]');
      
        form.addEventListener('submit', (e) => {
          e.preventDefault();
      
          // Check if all input fields are empty
          if (
            nameInput.value.trim() === '' &&
            dobInput.value === '' &&
            emailInput.value.trim() === '' &&
            phoneInput.value.trim() === '' &&
            addressInput.value.trim() === '' &&
            citySelect.value === '' &&
            pincodeInput.value.trim() === '' &&
            passwordInput.value.trim() === '' &&
            confirmPasswordInput.value.trim() === ''
          ) {
            alert('Please fill in all the fields');
            return;
          }
      
          // Validate name
          if (nameInput.value.trim() === '' || /\d/.test(nameInput.value)) {
            alert('Please enter a valid name (no numbers)');
            return;
          }
      
          // Validate date of birth
          if (dobInput.value === '') {
            alert('Please enter your date of birth');
            return;
          }
      
          // Validate email
          if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
            alert('Please enter a valid email address');
            return;
          }
      
          // Validate phone number
          if (phoneInput.value.trim() === '' || !validatePhoneNumber(phoneInput.value)) {
            alert('Please enter a valid phone number (10 digits, no characters)');
            return;
          }
      
          // Validate address
          if (addressInput.value.trim() === '') {
            alert('Please enter your address');
            return;
          }
      
          // Validate city
          if (citySelect.value === '') {
            alert('Please select a city');
            return;
          }
      
          // Validate pin code
          if (pincodeInput.value.trim() === '' || !validatePincode(pincodeInput.value)) {
            alert('Please enter a valid pin code (6 digits, no characters)');
            return;
          }
      
          // Validate password
          if (passwordInput.value.trim() === '' || passwordInput.value.length < 6) {
            alert('Please enter a password with at least 6 characters');
            return;
          }
      
          // Validate confirm password
          if (confirmPasswordInput.value.trim() === '' || confirmPasswordInput.value !== passwordInput.value) {
            alert('Please enter the same password as above');
            return;
          }
      
          // If all validations pass, submit the form
          form.submit();
        });
      
        function validateEmail(email) {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailRegex.test(email);
        }
      
        function validatePhoneNumber(phoneNumber) {
          const phoneRegex = /^[0-9]{10}$/;
          return phoneRegex.test(phoneNumber);
        }
      
        function validatePincode(pincode) {
          const pincodeRegex = /^[0-9]{6}$/;
          return pincodeRegex.test(pincode);
        }