document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Dummy user data for example
    const dummyUser = {
      email: 'user@example.com',
      password: 'password123'
    };
  
    if (email === dummyUser.email && password === dummyUser.password) {
      // Successful login
      localStorage.setItem('user', JSON.stringify({ email }));
      window.location.href = 'index.html'; // Redirect to the home page
    } else {
      // Error handling
      errorMessage.textContent = 'Invalid email or password';
    }
  });
  