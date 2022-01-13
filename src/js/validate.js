const $complete = document.querySelectorAll('.complete');
const $error = document.querySelectorAll('.error');
const $errorMsg = document.querySelectorAll('.error-message');

const iconChange = (index, isError) => {
  if (isError) {
    $complete[index].classList.add('hidden');
    $error[index].classList.remove('hidden');
  } else {
    $complete[index].classList.remove('hidden');
    $error[index].classList.add('hidden');
  }
};

const countCorrectInput = (arr, index, btn) => {
  const cnt = arr.filter(idx => (idx !== index ? !$complete[idx].classList.contains('hidden') : false)).length;

  if (cnt === arr.length - 1) btn.removeAttribute('disabled');
};

const activeSubmitButton = (reg, index, btn) => {
  if (reg) btn.setAttribute('disabled', '');
  else {
    countCorrectInput(
      [...$complete].map((_, i) => i),
      index,
      btn
    );
  }
};

const checkIsCorrectForm = (reg, index, btn) => {
  iconChange(index, reg);
  reg ? $errorMsg[index].classList.remove('hidden') : $errorMsg[index].classList.add('hidden');
  activeSubmitButton(reg, index, btn);
};

const reg = [
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  /^[A-Za-z0-9]{6,12}$/,
  /^[A-Za-z0-9]{6,12}$/,
  /^[^\s]{1,}$/,
  /^[^\s]{1,}$/,
  /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
];

export default {
  validate(inputValue, index, button) {
    return checkIsCorrectForm(index === 2 ? inputValue : !reg[index].test(inputValue), index, button);
  },
};
