import axios from 'axios';

const setPosts = posts => {
  const addedHtml = posts
    .map(
      post =>
        `<li class="main-post">
    <div class="user-info">
      <button class="avatar-button avatar-button--main" style="background-image: url(${post.userProfile}) no-repeat"></button><a class="user-nickname">${post.nickname}</a>
    </div>
    <span class="main-post__title">${post.title}</span
    ><span class="main-post__desc">${post.content}</span>
  </li>`
    )
    .join('');

  return addedHtml;
};

const getSplitedPosts = async () => {
  try {
    const { data } = await axios.get('/posts');
    return setPosts(data);
  } catch (e) {
    console.error(e);
  }
};

const render = async () => {
  const addedHtml = await getSplitedPosts();
  const $postsContainer = document.querySelector('.posts-container');
  console.log(typeof addedHtml);
  $postsContainer.innerHTML = `<li class="main-post-sizer"></li>` + addedHtml;
  const msnry = new Masonry('.posts-container', {
    itemSelector: '.main-post',
    columnWidth: '.main-post-sizer',
    percentPosition: true,
    gutter: 20,
  });
};

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
<ul class="posts-container"></ul>
  <button class="see-more see-more--main">더보기</button>
</section>`;

const indexEvent = () => {
  window.addEventListener('DOMContentLoaded', render);
};

// export default render;
export default {
  indexHtml,
  indexEvent,
};
