import axios from 'axios';

const masonry = {
  itemSelector: '.main-post',
  columnWidth: '.main-post-sizer',
  percentPosition: true,
  gutter: 20,
};

const setPosts = posts =>
  posts
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
    new Masonry('.posts-container', masonry);
  } catch (e) {
    console.error(e);
  }
};

const mainPageInitialRender = async $postsContainer => {
  try {
    const { data } = await axios.get('/posts/init');
    const addedHtml = await setPosts(data);
    $postsContainer.innerHTML = `<li class="main-post-sizer"></li>` + addedHtml;
    new Masonry('.posts-container', masonry);
  } catch (e) {
    console.error(e);
  }
};

const addPopularPosts = posts =>
  posts
    .map(
      post =>
        `<li class="post" data-post-id="${post.postId}">
      <span class="post__title">${post.title}</span><span class="post__desc">${post.content}</span>
    </li>`
    )
    .join('');

const setPopularPosts = async ($populaPpostsContainer, userId) => {
  try {
    const { data } = await axios.get(`develog/${userId}/popularposts`);
    const popularposts = addPopularPosts(data);
    $populaPpostsContainer.innerHTML = popularposts;
  } catch (e) {
    console.error(e);
  }
};

const addUserPosts = posts =>
  posts
    .map(
      post =>
        `<li class="post" data-post-id="${post.postId}">
           <span class="post__title">${post.title}</span>
        <span class="post__desc">${post.content}</span>
         </li>`
    )
    .join('');

const setUserPosts = async ($allPostContainer, userId) => {
  try {
    const { data } = await axios.get(`/develog/${userId}/posts`);

    if (data.length === 0) {
      document.querySelector('.see-more').classList.add('hidden');
      return;
    }
    if (data.length < 8) {
      document.querySelector('.see-more').classList.add('hidden');
    }
    const userPosts = addUserPosts(data);
    $allPostContainer.innerHTML += userPosts;
    new Masonry('.all-posts', {
      itemSelector: '.post',
      columnWidth: '.post-sizer',
      percentPosition: true,
      gutter: 40,
    });
  } catch (e) {
    console.error(e);
  }
};

const develogPageInitialRender = async ($populaPpostsContainer, $allPostContainer, userId) => {
  await setPopularPosts($populaPpostsContainer, userId);
  console.log('here', userId);
  await setUserPosts($allPostContainer, userId);
  console.log('there', userId);
};

const showSearchedPosts = async (input, $postsContainer) => {
  try {
    const { data } = await axios.get(`/search/${input}`);
    const addedHtml = await setPosts(data);
    $postsContainer.innerHTML = `<li class="main-post-sizer"></li>` + addedHtml;
    new Masonry('.posts-container', masonry);
  } catch (e) {
    console.error(e);
  }
};

export { mainPageInitialRender, getMorePostsForMain, develogPageInitialRender, setUserPosts, showSearchedPosts };
