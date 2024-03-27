// JavaScript for handling form submissions
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            // You can add AJAX or fetch request to handle login
            console.log('Login:', username, password);
            // Redirect to home page or show success message
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            // You can add AJAX or fetch request to handle signup
            console.log('Signup:', username, email, password);
            // Redirect to login page or show success message
        });
    }
});
