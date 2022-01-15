import axios from 'axios';
import header from './header';
import * as postFunc from './showPost';

const addPopularPosts = posts =>
  posts
    .map(
      post =>
        `<li class="post">
      <span class="post__title">${post.title}</span><span class="post__desc">${post.content}</span>
    </li>`
    )
    .join('');

const develogPageInitialRender = async ($populaPpostsContainer, $allPostContainer, userId) => {
  const { data } = await axios.get(`develog/${userId}/popularposts`);
  console.log(data);
  const popularposts = addPopularPosts(data);
  $populaPpostsContainer.innerHTML = popularposts;
};

const addAllPosts = posts => {
  const post = [];
  for (let i = 0; i < 8; i++) {
    post[i] =
      `<li class="post" data-id="${posts[i].postId}">
          <span class="post__title">${posts[i].title}</span>` + posts[i].imgUrl
        ? `<img src="${posts[i].imgUrl}">`
        : '' +
          `<span class="post__desc">${posts[i].contents}</span>
        </li>`;
  }
  allPost = allPost.slice(0, 9);
  $allPostContainer.innerHTML += post.join('');
};

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
  develogPageInitialRender(document.querySelector('.popular-posts'), document.querySelector('.all-posts'), userId);
  const $seeMoreBtn = document.querySelector('.see-more');
  $seeMoreBtn.addEventListener('click', getSplitedPosts);
};

export default {
  develogHtml,
  develogEvent,
};
