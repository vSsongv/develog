const searchInput = document.getElementById('search');

document.querySelector('.search--form label').onclick = () => {
  searchInput.value = '';
  searchInput.classList.toggle('search--hidden');
};
