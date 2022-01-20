import axios from 'axios';

let mainIndex = 1;
let develogIndex = 0;

const setPosts = posts =>
  posts
    .map(
      post =>
        `<li class="main-post" data-post-id="${post.postId}">
    <div class="user-info" data-user-id="${post.userId}">
      <button class="avatar-button avatar-button--main" style="background-image:url('${post.userProfile}')"></button>
      <a class="user-nickname">${post.nickname}</a>
    </div>
    <span class="main-post__title">${post.title}</span
    ><span class="main-post__desc">${post.content}</span>
  </li>`
    )
    .join('');

const getPosts = async () => {
  try {
    const { data } = await axios.get(`/posts/${mainIndex}/split`);
    mainIndex += 1;
    if (data.length < 12) {
      document.querySelector('.see-more').classList.add('hidden');
      document.querySelector('.is-last-post').classList.remove('hidden');
    }
    document.querySelector('.posts-container').innerHTML += setPosts(data);
  } catch (e) {
    console.error(e);
  }
};

const mainPageInitialRender = async $postsContainer => {
  try {
    const { data } = await axios.get('/posts/init');
    mainIndex = 1;
    const addedHtml = setPosts(data);
    $postsContainer.innerHTML = addedHtml;
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
    develogIndex = 0;
    const { data } = await axios.get(`/develog/${userId}/popularposts`);
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

const getUserPosts = async ($allPostContainer, userId) => {
  try {
    console.log('hhhh', $allPostContainer);
    const { data } = await axios.get(`/develog/${userId}/posts/${develogIndex}`);
    develogIndex += 1;
    console.log(develogIndex);
    if (data.length < 8) {
      console.log('sgdags');
      console.log('here', document.querySelector('.see-more'));
      document.querySelector('.see-more').classList.add('hidden');
      // console.log(document.querySelector('.see-more'));
    }
    const userPosts = addUserPosts(data);
    $allPostContainer.innerHTML += userPosts;
  } catch (e) {
    console.error(e);
  }
};

const develogPageInitialRender = ($populaPpostsContainer, $allPostContainer, userId) => {
  setPopularPosts($populaPpostsContainer, userId);
  getUserPosts($allPostContainer, userId);
};

const showSearchedPosts = async (searchTitle, $postsContainer) => {
  try {
    const { data } = await axios.get(`/search?title=${searchTitle}`);
    const addedHtml = setPosts(data);
    $postsContainer.innerHTML = addedHtml;
  } catch (e) {
    console.error(e);
  }
};

export default {
  mainPageInitialRender,
  getPosts,
  develogPageInitialRender,
  getUserPosts,
  showSearchedPosts,
};
