const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

function login() {
    // Add login logic here
    alert('Login functionality will be implemented here.');
}

function register() {
    // Add registration logic here
    alert('Registration functionality will be implemented here.');
}