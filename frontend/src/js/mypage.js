import axios from 'axios';
import mypage from '../html/mypage.html';

const mypageNode = () => {
  const node = document.createElement('div');
  node.innerHTML = mypage;

  // Event
  (async () => {
    try {
      const { data: user } = await axios.get('/checkAuth');
      console.log(node.querySelector('.nickname span'));
      node.querySelector('.nickname span').textContent = user.nickname;
      node.querySelector('#name').value = user.name;
      node.querySelector('#email').value = user.email;
      node.querySelector('#phone').value = user.phone;
      node.querySelector('.user-profile-avatar').style.backgroundImage = `url('${user.avatarUrl}')`;
    } catch (e) {
      console.error(e);
      // window.history.pushState({}, '', '/signin');
    }
  })();

  let checkPasswordCnt = 0;

  const withdrawalToggle = () => {
    document.querySelector('.cover').classList.toggle('hidden');
    document.querySelector('.withdrawal').classList.toggle('hidden');
  };

  const editToggle = () => {
    document.querySelector('.cover').classList.toggle('hidden');
    document.querySelector('.profileEdit').classList.toggle('hidden');
  };

  node.querySelector('.button--withdrawal').onclick = withdrawalToggle;
  node.querySelector('.withdrawal--close').onclick = withdrawalToggle;
  node.querySelector('.button--edit').onclick = editToggle;
  node.querySelector('.profileEdit--close').onclick = editToggle;

  const $error = node.querySelectorAll('.error-message');

  node.querySelector('.profileEdit').onsubmit = async e => {
    e.preventDefault();

    try {
      const { data: user } = await axios.get('/checkAuth');
      const data = await axios.post(`/checkPassword/${user.userId}`, {
        password: document.querySelector('.profileEdit--password').value,
      });
      if (data.status === 204) window.history.pushState({ data: 'user' }, '', '/mypageEdit');
      else if (data.data === 'failed') {
        checkPasswordCnt += 1;
        if (checkPasswordCnt < 4) {
          $error[1].textContent = `비밀번호가 일치하지 않습니다. 4회 이상 틀리면 로그아웃됩니다. (${checkPasswordCnt}/4)`;
        } else {
          const check = await axios.get('/logout');
          if (check.status === 204) window.history.pushState({}, '', '/');
        }
      }
      $error[1].classList.remove('hidden');
    } catch (e) {
      console.log(e);
    }
  };

  node.querySelector('.withdrawal').onsubmit = async e => {
    e.preventDefault();

    try {
      const { data: user } = await axios.get('/checkAuth');
      const data = await axios.post(`/delete/user/${user.userId}`, {
        password: document.querySelector('.withdrawal--password').value,
      });
      if (data.status === 204) window.history.pushState({}, '', '/');
      else if (data.data === 'failed') {
        checkPasswordCnt += 1;
        if (checkPasswordCnt < 4) {
          console.log($error);
          $error[0].textContent = `비밀번호가 일치하지 않습니다. 4회 이상 틀리면 로그아웃됩니다. (${checkPasswordCnt}/4)`;
        } else {
          const check = await axios.get('/logout');
          if (check.status === 204) window.history.pushState({}, '', '/');
        }
      }
      $error[0].classList.remove('hidden');
    } catch (e) {
      console.log(e);
    }
  };

  return node.children;
};

export default mypageNode;
