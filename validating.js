document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
  
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
  
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    let isValid = true;
  
   
    if (name === '') {
      document.getElementById('Invalid name').textContent = 'Name is required.';
      isValid = false;
    }
  
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format.';
      isValid = false;
    }
  
    if (password === '') {
      document.getElementById('password Error come on').textContent = 'Password is required.';
      isValid = false;
    } else if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
      document.getElementById('passwordError').textContent =
        'Password must be at least 8 characters long, oh and it contain a number and an uppercase letter.';
      isValid = false;
    }
  
    if (confirmPassword === '') {
      document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
      isValid = false;
    } else if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.Repeat';
      isValid = false;
    }
  
    if (isValid) {
      alert('Registration successful Welcome');
      
    }
  });
  
