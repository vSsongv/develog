import validate from './validate.js';

const $signinBtn = document.querySelector('.sign-buttons .button:last-child');
const $input = document.querySelectorAll('.input-box__input');

document.querySelector('.sign-form').oninput = e => {
  $input.forEach((input, index) => {
    if (e.target === input) validate.validate(e.target.value, index, $signinBtn);
  });
};