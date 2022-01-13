import validate from './validate.js';

const $editBtn = document.querySelector('.button--editComplete');
const $input = document.querySelectorAll('.input-box__input');

document.querySelector('.mypageEdit--form').oninput = e => {
  $input.forEach((input, index) => {
    if (e.target === input && e.target.matches('#confirmPassword'))
      return validate.validate(e.target.value !== document.querySelector('#password').value, index, $editBtn);
    if (e.target === input) return validate.validate(e.target.value, index, $editBtn);
  });
};

const reader = new FileReader();
reader.onload = () => {
  document.querySelector('.mypageEdit--avatar').style.backgroundImage = `url('${reader.result}')`;
};

document.querySelector('#selectImage').onchange = e => {
  reader.readAsDataURL(e.target.files[0]);
};
