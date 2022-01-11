const modalToggle = () => {
  document.querySelector('.cover').classList.toggle('hidden');
  document.querySelector('.withdrawal').classList.toggle('hidden');
};

document.querySelector('.button--withdrawal').onclick = modalToggle;
document.querySelector('.withdrawal--close').onclick = modalToggle;
