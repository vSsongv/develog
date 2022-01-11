import validate from './validate.js';

const $signupBtn = document.querySelector('.sign-buttons .button:last-child');
const $input = document.querySelectorAll('.input-box__input');

document.querySelector('.sign-form').oninput = e => {
  $input.forEach((input, index) => {
    if (e.target === input && e.target.matches('#confirmPassword')) return validate.validate(e.target.value !== document.querySelector('#password').value, index, $signupBtn);
    if (e.target === input) return validate.validate(e.target.value, index, $signupBtn);
  });
};