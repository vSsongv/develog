import axios from 'axios';

const headerEvent = () => {
  const searchInput = document.getElementById('search');

  document.querySelector('.search--form label').onclick = () => {
    searchInput.value = '';
    searchInput.classList.toggle('search--hidden');
  };

  document.querySelector('.header--logo').addEventListener('click', () => {
    window.history.pushState({}, '', '/');
  });

  document.querySelector('.button--login').addEventListener('click', () => {
    window.history.pushState({}, '', '/signin');
  });

  window.onload = async () => {
    try {
      const { data: user } = await axios.get('/checkAuth');
      if (user) {
        document.querySelector('.user').classList.remove('hidden');
        document.querySelector('.button--login').classList.add('hidden');
        document.querySelector('.nav-box ul li:first-child').addEventListener('click', () => {
          window.history.pushState({}, '', '/develog');
        });

        document.querySelector('.nav-box ul li:nth-child(2)').addEventListener('click', () => {
          window.history.pushState({}, '', '/mypage');
        });
      } else {
        document.querySelector('.user').classList.add('hidden');
        document.querySelector('.button--login').classList.remove('hidden');
        window.history.pushState(null, null, '/');
      }
    } catch (e) {
      console.error(e);
    }
  };
  document.querySelector('.user').onclick = () => {
    document.querySelector('.nav-box').classList.toggle('hidden');
  };
  document.querySelector('.nav-box ul li:last-child').onclick = async () => {
    try {
      const check = await axios.get('/logout');
      if (check.status === 204) window.history.pushState(null, null, '/');
    } catch (e) {
      console.error(e);
    }
  };
};

export default {
  headerEvent,
};
