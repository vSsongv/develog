import postFunc from './showPost';
import search from '../html/search.html';

const searchNode = () => {
  const node = document.createElement('div');
  node.innerHTML = search;

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
