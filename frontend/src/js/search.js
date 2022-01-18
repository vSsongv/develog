import * as postFunc from './showPost';

const searchNode = () => {
  const node = document.createElement('div');
  node.innerHTML = `
    <section class="main-container">
      <ul class="posts-container"></ul>
      <span class="is-last-post">마지막 포스트입니다.</span>
    </section>`;

  const searchTitle = window.location.pathname.split('/')[2];

  // Event
  postFunc.showSearchedPosts(searchTitle, document.querySelector('.posts-container'));

  document.querySelector('.main-container').addEventListener('click', e => {
    if (e.target.classList.contains('avatar-button') || e.target.classList.contains('user-nickname')) {
      window.history.pushState(null, null, `/develog/${e.target.parentNode.dataset.userId}`);
    } else if (e.target.className.split('__')[0].includes('main-post')) {
      window.history.pushState(null, null, `/detail/${e.target.closest('li').dataset.postId}`);
    }
  });
};

export default searchNode;
