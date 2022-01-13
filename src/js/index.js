// import app from '../app';
// import signin from './signin';
// import detail from './detail';
import header from './header';

const indexHtml = ` <header class="header">
<h1 class="header--logo">develog</h1>

<form class="search--form" action="">
  <input id="search" class="hidden" type="text" />
  <label for="search" class="fas fa-search"></label>
</form>

<button class="button button--login">Login</button>

<div class="user hidden">
  <img class="avatar" src="./assets/avatar.png" alt="avatar image" />
</div>

<nav class="nav-box hidden">
  <ul>
    <li>내 블로그</li>
    <li>마이페이지</li>
    <li>로그아웃</li>
  </ul>
</nav>
</header>
<section class="main-container">
<ul class="posts-container">
  <li class="main-post-sizer"></li>
  <li class="main-post">
    <div class="user-info">
      <button class="avatar-button avatar-button--main"></button><a class="user-nickname">user</a>
    </div>
    <span class="main-post__title">title1</span
    ><span class="main-post__desc">놀라지놀라지마달라진달라진너heylitsen</span>
  </li>
  <li class="main-post">
    <div class="user-info">
      <button class="avatar-button avatar-button--main"></button><a class="user-nickname">user</a>
    </div>
    <span class="main-post__title">title2</span
    ><span class="main-post__desc"
      >놀라지놀라지마달라진달라진너heylitsen지금넌differentweapon~~aimittotheworld~~rollthisgame빈틈을노려~</span
    >
  </li>
  <li class="main-post">
    <div class="user-info">
      <button class="avatar-button avatar-button--main"></button><a class="user-nickname">user</a>
    </div>
    <span class="main-post__title">title3</span><img src="https://i.postimg.cc/gkQkrcf3/4.png" />
    <span class="main-post__desc">놀라지놀라지마달라진달라진너heylitsen</span>
  </li>
  <li class="main-post">
    <div class="user-info">
      <button class="avatar-button avatar-button--main"></button><a class="user-nickname">user</a>
    </div>
    <span class="main-post__title">title4</span><img src="https://i.postimg.cc/T1jKdLr8/design2.png" />
    <span class="main-post__desc">놀라지놀라지마달라진달라진너heylitsen</span>
  </li>
  <li class="main-post">
    <div class="user-info">
      <button class="avatar-button avatar-button--main"></button><a class="user-nickname">user</a>
    </div>
    <span class="main-post__title">title</span
    ><span class="main-post__desc">놀라지놀라지마달라진달라진너heylitsen지금넌differentweapon~~</span>
  </li>
  <li class="main-post">
    <div class="user-info">
      <button class="avatar-button avatar-button--main"></button><a class="user-nickname">user</a>
    </div>
    <span class="main-post__title">title5</span><img src="https://i.postimg.cc/gkQkrcf3/4.png" /><span
      class="main-post__desc"
      >놀라지놀라지마달라진달라진너heylitsen</span
    >
  </li>
  <li class="main-post">
    <div class="user-info">
      <button class="avatar-button avatar-button--main"></button><a class="user-nickname">user</a>
    </div>
    <span class="main-post__title">title6</span><img src="https://i.postimg.cc/T1jKdLr8/design2.png" /><span
      class="main-post__desc"
      >놀라지놀라지마달라진달라진너heylitsen</span
    >
  </li>
  <li class="main-post">
    <div class="user-info">
      <button class="avatar-button avatar-button--main"></button><a class="user-nickname">user</a>
    </div>
    <span class="main-post__title">title7</span
    ><span class="main-post__desc">놀라지놀라지마달라진달라진너heylitsen</span>
  </li>
  <li class="main-post">
    <div class="user-info">
      <button class="avatar-button avatar-button--main"></button><a class="user-nickname">user</a>
    </div>
    <span class="main-post__title">title8</span><img src="https://i.postimg.cc/gkQkrcf3/4.png" /><span
      class="main-post__desc"
      >놀라지놀라지마달라진달라진너heylitsen</span
    >
  </li>
  <li class="main-post">
    <div class="user-info">
      <button class="avatar-button avatar-button--main"></button><a class="user-nickname">user</a>
    </div>
    <span class="main-post__title">title9</span
    ><span class="main-post__desc">놀라지놀라지마달라진달라진너heylitsen</span>
  </li>
  <li class="main-post">
    <div class="user-info">
      <button class="avatar-button avatar-button--main"></button><a class="user-nickname">user</a>
    </div>
    <span class="main-post__title">title10</span
    ><span class="main-post__desc">놀라지놀라지마달라진달라진너heylitsen</span>
  </li>
  <button class="see-more">더보기</button>
</ul>
</section>`;

// const render = () => {
//   const $root = document.querySelector('.root');
//   $root.innerHTML = indexHTML;
// };

const indexEvent = () => {
  header.headerEvent();
  // const msnry = new Masonry('.posts-container', {
  //   itemSelector: '.main-post',
  //   columnWidth: '.main-post-sizer',
  //   percentPosition: true,
  //   gutter: 20,
  // });

  // const $button = document.querySelector('.button--login');
  // const $userinfo = document.querySelector('.user-info');
  // const currentPage = window.location.pathname;
  // $userinfo.addEventListener('click', e => {
  //   console.log(e.target);
  //   window.history.pushState({
  //     data: 'post'
  //   }, '', '/detail');
  // });

  // $button.addEventListener('click', e => {
  //   console.log(e.target);
  //   window.history.pushState({
  //     data: 'signin'
  //   }, '', '/signin');
  // });
};

// export default render;
export default {
  indexHtml,
  indexEvent,
};