const headerEvent = () => {
  const searchInput = document.getElementById('search');

  document.querySelector('.search--form label').onclick = () => {
    searchInput.value = '';
    searchInput.classList.toggle('search--hidden');
  };

  document.querySelector('.button--login').addEventListener('click', () => {
    window.history.pushState({}, '', '/signin');
  });
};

export default { headerEvent };
