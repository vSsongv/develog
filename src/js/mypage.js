import header from './header';
import axios from 'axios';

const mypageHtml = `<div class="cover hidden"></div>
<header class="header">
  <h1 class="header--logo">
    develog
  </h1>

  <form class="search--form" action="">
    <input id="search" class="search--hidden" type="text">
    <label for="search" class="fas fa-search "></label>
  </form>

  <button class="button button--login">Login</button>

  <div class="user hidden"></div>

  <nav class="nav-box hidden">
    <ul>
      <li>내 블로그</li>
      <li>마이페이지</li>
      <li>로그아웃</li>
    </ul>
  </nav>
</header>

<div class="container">
  <section class="user-profile">
    <h2 class="a11yHidden">회원 정보</h2>
    <div class="user-profile-avatar"></div>
    <div class="user-profile-info">
      <div class="nickname">
        <span></span>
        <span>님, 환영합니다.</span>
      </div>
      <div class="user-profile-info-input">
        <label for="name">name :</label>
        <input id="name" type="text" disabled>
      </div>
      <div class="user-profile-info-input">
        <label for="email">email :</label>
        <input id="email" type="email" disabled>
      </div>
      <div class="user-profile-info-input">
        <label for="phone">phone :</label>
        <input id="phone" type="text" disabled>
      </div>
    </div>
  </section>

  <section class="information">
    <h2 class="a11yHidden">좋아요한 블로그 포스팅 목록</h2>
    <div class="postNum">
      <span>내 블로그 글 개수</span>
      <span>12</span>
    </div>

  </section>
  <section class="button-box">
    <button class="button button--edit">회원정보 수정</button>
    <button class="button button--withdrawal">회원탈퇴</button>
  </section>

  <section class="withdrawal hidden">
    <h2 class="a11yHidden">회원탈퇴 확인 팝업</h2>
    <button class="withdrawal--close"><i class="fas fa-times"></i></button>
    <h3>회원탈퇴를 하시려면 비밀번호를 입력후 회원탈퇴 버튼을 눌러주세요.</h3>
    <input class="withdrawal--password" type="password" placeholder="비밀번호를 입력해주세요.">
    <span class="error-message hidden">비밀번호가 일치하지 않습니다. 3회 이상 틀리면 로그아웃됩니다.</span>
    <button type="button" class="button button--withdrawal withdrawal-confirm">회원탈퇴</button>
  </section>
  
  <section class="profileEdit hidden">
    <h2 class="a11yHidden">수정페이지 이동 전 비밀번호 확인</h2>
    <button class="profileEdit--close"><i class="fas fa-times"></i></button>
    <h3>수정페이지로 이동하시려면 비밀번호를 입력하세요.</h3>
    <input class="profileEdit--password" type="password" placeholder="비밀번호를 입력해주세요.">
    <span class="error-message hidden">비밀번호가 일치하지 않습니다. 3회 이상 틀리면 로그아웃됩니다.</span>
    <button type="button" class="button button--edit profileEdit-confirm">비밀번호 확인</button>
  </section>
</div>`;

const userProfileSet = async () => {
  try {
    const { data: user } = await axios.get('/checkAuth');
    document.querySelector('.nickname span').textContent = user.nickname;
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
    document.querySelector('.user-profile-avatar').style.backgroundImage = `url('/avatar/${user.userId}')`;
  } catch (e) {
    console.error(e);
    window.history.pushState({}, '', '/signin');
  }
};

const mypageEvent = () => {
  let checkPasswordCnt = 0;
  userProfileSet();

  header.headerEvent();

  const withdrawalToggle = () => {
    document.querySelector('.cover').classList.toggle('hidden');
    document.querySelector('.withdrawal').classList.toggle('hidden');
  };

  const editToggle = () => {
    document.querySelector('.cover').classList.toggle('hidden');
    document.querySelector('.profileEdit').classList.toggle('hidden');
  };

  document.querySelector('.button--withdrawal').onclick = withdrawalToggle;
  document.querySelector('.withdrawal--close').onclick = withdrawalToggle;
  document.querySelector('.button--edit').onclick = editToggle;
  document.querySelector('.profileEdit--close').onclick = editToggle;

  // document.querySelector('.button--edit').addEventListener('click', e => {
  //   window.history.pushState({ data: 'user' }, '', '/mypageEdit');
  // });

  const $error = document.querySelectorAll('.error-message');

  // const deleteApi = async user => {
  //   const data = await axios.post(`/delete/user/${user.userId}`, {
  //     password: document.querySelector('.withdrawal--password').value,
  //   });
  // };

  document.querySelector('.profileEdit-confirm').onclick = async restApi => {
    try {
      const { data: user } = await axios.get('/checkAuth');
      const data = await axios.post(`/checkPassword/${user.userId}`, {
        password: document.querySelector('.profileEdit--password').value,
      });
      // console.log(data);
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

  document.querySelector('.withdrawal-confirm').onclick = async restApi => {
    try {
      const { data: user } = await axios.get('/checkAuth');
      const data = await axios.post(`/delete/user/${user.userId}`, {
        password: document.querySelector('.withdrawal--password').value,
      });
      // console.log(data);
      if (data.status === 204) window.history.pushState({}, '', '/');
      else if (data.data === 'failed') {
        checkPasswordCnt += 1;
        if (checkPasswordCnt < 4) {
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
};

export default { mypageHtml, mypageEvent };
