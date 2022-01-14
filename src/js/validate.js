let check = 0;

const isDuplicate = (index, isError) => {
  if (isError) {
    document.querySelectorAll('.complete')[index].classList.add('hidden');
    document.querySelectorAll('.error')[index].classList.remove('hidden');
    document.querySelectorAll('.check-message')[+!!index].classList.remove('hidden');
    document.querySelectorAll('.double-check')[+!!index].style.backgroundColor = 'red';
    if (document.querySelectorAll('.complete').length > 2) check = [...document.querySelectorAll('.double-check')].filter(button => button.style.backgroundColor === 'green').length;
  } else {
    document.querySelectorAll('.complete')[index].classList.remove('hidden');
    document.querySelectorAll('.error')[index].classList.add('hidden');
    document.querySelectorAll('.check-message')[+!!index].classList.add('hidden');
    document.querySelectorAll('.double-check')[+!!index].style.backgroundColor = 'green';
  }
  if (document.querySelectorAll('.complete').length > 2) check = [...document.querySelectorAll('.double-check')].filter(button => button.style.backgroundColor === 'green').length;
}

const iconChange = (index, isError) => {
  if (isError) {
    document.querySelectorAll('.complete')[index].classList.add('hidden');
    document.querySelectorAll('.error')[index].classList.remove('hidden');
    if (index === 0 || index === 4) {
      document.querySelectorAll('.double-check')[+!!index].setAttribute('disabled', '');
      document.querySelectorAll('.check-message')[+!!index].classList.add('hidden');
    }
  } else {
    document.querySelectorAll('.complete')[index].classList.remove('hidden');
    document.querySelectorAll('.error')[index].classList.add('hidden');
    if (index === 0 || index === 4) {
      document.querySelectorAll('.double-check')[+!!index].removeAttribute('disabled');
      // document.querySelectorAll('.check-message')[+!!index].classList.remove('hidden');
    }
  }
};

const countCorrectInput = (arr, index, btn) => {
  const cnt = arr.filter(idx => (idx !== index ? !document.querySelectorAll('.complete')[idx].classList.contains('hidden') : false)).length;
  if ((cnt === 1 || check === 2) && cnt === arr.length - 1) btn.removeAttribute('disabled');
};

const activeSubmitButton = (reg, index, btn) => {
  if (reg) btn.setAttribute('disabled', '');
  else {
    countCorrectInput(
      [...document.querySelectorAll('.complete')].map((_, i) => i),
      index,
      btn
    );
  }
};

const checkIsCorrectForm = (reg, index, btn) => {
  if (document.querySelectorAll('.check-message')[+!!index] && !document.querySelectorAll('.check-message')[+!!index].classList.contains('hidden') &&
    (index === 0 || index === 4)) {
    document.querySelectorAll('.check-message')[+!!index].classList.remove('hidden');
    document.querySelectorAll('.double-check')[+!!index].style.backgroundColor = 'red';
  }
  iconChange(index, reg);
  reg ? document.querySelectorAll('.error-message')[index].classList.remove('hidden') : document.querySelectorAll('.error-message')[index].classList.add('hidden');
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
  isDuplicate
};