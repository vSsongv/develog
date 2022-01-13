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

  <div class="user hidden">
    <img class="avatar" src="./assets/avatar.png" alt="avatar image">
  </div>

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
        <span>쨈콩</span>
        <span>님, 환영합니다.</span>
      </div>
      <div class="user-profile-info-input">
        <label for="name">name :</label>
        <input id="name" type="text" disabled value="원종빈">
      </div>
      <div class="user-profile-info-input">
        <label for="email">email :</label>
        <input id="email" type="email" disabled value="jongbin@gmail.com">
      </div>
      <div class="user-profile-info-input">
        <label for="nickname">phone :</label>
        <input id="phone" type="text" disabled value="010-0000-0000">
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
    <button class="button button--withdrawal">회원탈퇴</button>
  </section>
</div>`;

const mypageEvent = () => {
  const modalToggle = () => {
    document.querySelector('.cover').classList.toggle('hidden');
    document.querySelector('.withdrawal').classList.toggle('hidden');
  };

  document.querySelector('.button--withdrawal').onclick = modalToggle;
  document.querySelector('.withdrawal--close').onclick = modalToggle;
};

export default { mypageHtml, mypageEvent };
