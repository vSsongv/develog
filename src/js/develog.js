import header from './header';
import * as postFunc from './showPost';

const develogHtml = `<header class="header">
      <h1 class="header--logo">develog</h1>

      <form class="search--form" action="">
        <input id="search" class="search--hidden" type="text" />
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
    <section class="develog-container">
      <span class="popular-posts__title">인기 포스트 TOP 3</span>
      <i class="fas fa-heart"></i>
      <ul class="popular-posts">
      </ul>
      <span class="all-posts__title">전체 포스트</span>
      <ul class="all-posts">
        <li class="post-sizer"></li>
        <button class="see-more see-more--develog">더보기</button>
        </ul>
    </section>`;

const develogEvent = userId => {
  header.headerEvent();

  const $allPostContainer = document.querySelector('.all-posts');

  postFunc.develogPageInitialRender(document.querySelector('.popular-posts'), $allPostContainer, userId);

  //  document.querySelector('.see-more').addEventListener('click', postFunc.setUserPosts());

  document.querySelector('.develog-container').addEventListener('click', e => {
    if (e.target.className.split('__')[0] === 'post') {
      console.log(e.target);
      history.pushState(null, null, `/detail/${e.target.closest('li').dataset.postId}`);
    } else if (e.target.classList.contains('see-more')) {
      postFunc.setUserPosts($allPostContainer, userId);
      console.log(userId);
    }
  });
};

export default {
  develogHtml,
  develogEvent,
};
