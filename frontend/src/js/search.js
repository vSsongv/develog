import axios from 'axios';
import header from './header';
import * as postFunc from './showPost';

const searchHtml = ` <header class="header">
<h1 class="header--logo">develog</h1>

<form class="search--form" action="">
    <input id="search" class="search--hidden" type="text">
    <label for="search" class="fas fa-search "></label>
  </form>

  <button class="button button--login">Login</button>
  
  <button class="button button--posting">Posting</button>

  <div class="user hidden"></div>

<nav class="nav-box hidden">
  <ul>
    <li>내 블로그</li>
    <li>마이페이지</li>
    <li>로그아웃</li>
  </ul>
</nav>
</header>
<section class="main-container">
<ul class="posts-container"></ul>
<span class="is-last-post">마지막 포스트입니다.</span>
</section>`;

const searchEvent = searchTitle => {
  header.headerEvent();

  postFunc.showSearchedPosts(searchTitle, document.querySelector('.posts-container'));

  document.querySelector('.main-container').addEventListener('click', e => {
    if (e.target.classList.contains('avatar-button') || e.target.classList.contains('user-nickname')) {
      history.pushState(null, null, `/develog/${e.target.parentNode.dataset.userId}`);
    } else if (e.target.className.split('__')[0].includes('main-post')) {
      history.pushState(null, null, `/detail/${e.target.closest('li').dataset.postId}`);
    }
  });
};

export default {
  searchHtml,
  searchEvent,
};
