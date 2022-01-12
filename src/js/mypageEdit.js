import validate from './validate.js';

const $editBtn = document.querySelector('.button--editComplete');
const $input = document.querySelectorAll('.input-box__input');

document.querySelector('.mypageEdit--form').oninput = e => {
  $input.forEach((input, index) => {
    if (e.target === input && e.target.matches('#confirmPassword'))
      return validate.validateEdit(e.target.value !== document.querySelector('#password').value, index, $editBtn);
    if (e.target === input) return validate.validateEdit(e.target.value, index, $editBtn);
  });
};
