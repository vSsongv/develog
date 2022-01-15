import axios from 'axios';
import header from './header';

const setMasonry = {
  itemSelector: '.main-post',
  columnWidth: '.main-post-sizer',
  percentPosition: true,
  gutter: 20,
};

const setPosts = posts => {
  const addedHtml = posts
    .map(
      post =>
      `<li class="main-post" data-post-id="${post.postId}">
    <div class="user-info" data-user-id="${post.userId}">
      <button class="avatar-button avatar-button--main" style="background-image: url('img/avatar.png')"></button><a class="user-nickname">${post.nickname}</a>
    </div>
    <span class="main-post__title">${post.title}</span
    ><span class="main-post__desc">${post.content}</span>
  </li>`
    )
    .join('');

  return addedHtml;
};

const initialRender = async $postsContainer => {
  const {
    data
  } = await axios.get('/posts/init');
  const addedHtml = await setPosts(data);
  $postsContainer.innerHTML = `<li class="main-post-sizer"></li>` + addedHtml;
  new Masonry('.posts-container', setMasonry);
};

const getSplitedPosts = async () => {
  try {
    const {
      data
    } = await axios.get('/posts');
    if (data.length === 0) {
      return;
    }
    if (data.length < 10) {
      document.querySelector('.see-more').classList.add('hidden');
      document.querySelector('.is-last-post').classList.remove('hidden');
    }
    document.querySelector('.posts-container').innerHTML += setPosts(data);
    new Masonry('.posts-container', setMasonry);
  } catch (e) {
    console.error(e);
  }
};

const indexHtml = ` <header class="header">
<h1 class="header--logo">develog</h1>

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
<section class="main-container">
<ul class="posts-container"></ul>
<button class="see-more see-more--main">더보기</button>
<span class="is-last-post hidden">마지막 포스트입니다.</span>
</section>`;

const indexEvent = () => {
  header.headerEvent();

  const $postsContainer = document.querySelector('.posts-container');
  initialRender(document.querySelector('.posts-container'));
  const $seeMoreBtn = document.querySelector('.see-more');
  $seeMoreBtn.addEventListener('click', getSplitedPosts);

  document.querySelector('.main-container').addEventListener('click', e => {
    if (e.target.classList.contains('avatar-button') || e.target.classList.contains('user-nickname')) {
      history.pushState(null, null, `/develog/${e.target.parentNode.dataset.userId}`);
    } else if (e.target.className.split('__')[0].includes('main-post')) {
      history.pushState(null, null, `/detail/${e.target.closest('li').dataset.postId}`);
    }
  });
};
// export default render;
export default {
  indexHtml,
  indexEvent,
};