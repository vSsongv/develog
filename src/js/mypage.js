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
    <button type="button" class="button button--withdrawal withdrawal-confirm">회원탈퇴</button>
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
  userProfileSet();

  header.headerEvent();
  const modalToggle = () => {
    document.querySelector('.cover').classList.toggle('hidden');
    document.querySelector('.withdrawal').classList.toggle('hidden');
  };

  document.querySelector('.button--withdrawal').onclick = modalToggle;
  document.querySelector('.withdrawal--close').onclick = modalToggle;

  document.querySelector('.button--edit').addEventListener('click', e => {
    window.history.pushState({ data: 'user' }, '', '/mypageEdit');
  });

  document.querySelector('.withdrawal-confirm').addEventListener('click', async () => {
    try {
      const { data: user } = await axios.get('/checkAuth');

      const { status } = await axios.post(`/delete/user/${user.userId}`, {
        password: document.querySelector('.withdrawal--password').value,
      });
      if (status === 204) window.history.pushState({}, '', '/');
    } catch (e) {
      console.log(e);
    }
  });
};

export default { mypageHtml, mypageEvent };
