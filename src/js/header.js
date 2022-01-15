import axios from 'axios';

const search = async input => {
  const {
    data: filter
  } = await axios.get('/search/' + input);
  console.log(...filter);
}

const headerEvent = () => {
  const searchInput = document.getElementById('search');

  // search form submit 방지용
  document.querySelector('.search--form').onsubmit = e => {
    e.preventDefault();
  }
  // enter로 검색 시
  searchInput.onkeyup = async e => {
    if (e.key !== 'Enter') return;
    await search(e.target.value.trim());
    // 초기화
    searchInput.value = '';
    searchInput.classList.toggle('search--hidden');
  }
  document.querySelector('.search--form label').onclick = async () => {
    // icon click으로 검색 시
    if (!searchInput.classList.contains('search--hidden')) {
      await search(searchInput.value.trim());
    }
    // 초기화
    searchInput.value = '';
    searchInput.classList.toggle('search--hidden');
  };

  document.querySelector('.header--logo').addEventListener('click', () => {
    window.history.pushState(null, null, '/');
  });

  document.querySelector('.button--login').addEventListener('click', () => {
    window.history.pushState({}, '', '/signin');
  });

  (async () => {
    try {
      const {
        data: user
      } = await axios.get('/checkAuth');
      if (user) {
        document.querySelector('.user').classList.remove('hidden');
        document.querySelector('.button--login').classList.add('hidden');

        document.querySelector('.nav-box ul li:first-child').addEventListener('click', () => {
          window.history.pushState({}, '', '/develog');
        });

        document.querySelector('.nav-box ul li:nth-child(2)').addEventListener('click', () => {
          window.history.pushState({}, '', '/mypage');
        });

        document.querySelector('.user').style.backgroundImage = user.avartarUrl ?
          `url('${user.avartarUrl}')` :
          `url('img/defaultAvatar.png')`;

        document.querySelector('.user').onclick = () => {
          document.querySelector('.nav-box').classList.toggle('hidden');
        };
        document.querySelector('.nav-box ul li:last-child').onclick = async () => {
          try {
            const check = await axios.get('/logout');
            console.log(check.status === 204);
            if (check.status === 204) window.history.pushState(null, null, '/');
          } catch (e) {
            console.error(e);
          }
        };
      } else {
        document.querySelector('.user').classList.add('hidden');
        document.querySelector('.button--login').classList.remove('hidden');
        // if (window.location.pathname !== '/') window.history.pushState(null, null, '/');
      }
    } catch (e) {
      console.error(e);
    }
  })();
};

export default {
  headerEvent,
};