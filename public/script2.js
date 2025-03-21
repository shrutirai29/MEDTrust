const logrenBox = document.querySelector('.logren-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
  logrenBox.classList.add('active'); // Add active class for register
});

loginLink.addEventListener('click', () => {
    logrenBox.classList.remove('active'); // Add active class for register
  });