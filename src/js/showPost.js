import axios from 'axios';

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
      <img class="avatar-button avatar-button--main" src="${post.userProfile}" alt="avatar-button"/><a class="user-nickname">${post.nickname}</a>
    </div>
    <span class="main-post__title">${post.title}</span
    ><span class="main-post__desc">${post.content}</span>
  </li>`
    )
    .join('');

  return addedHtml;
};

const getMorePostsForMain = async () => {
  try {
    const { data } = await axios.get('/posts');
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

const mainPageInitialRender = async $postsContainer => {
  const { data } = await axios.get('/posts/init');
  const addedHtml = await setPosts(data);
  $postsContainer.innerHTML = `<li class="main-post-sizer"></li>` + addedHtml;
  new Masonry('.posts-container', setMasonry);
};

export { getMorePostsForMain, setPosts, mainPageInitialRender, setMasonry };
