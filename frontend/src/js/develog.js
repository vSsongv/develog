import postFunc from './showPost';
import develog from '../html/develog.html';

const develogNode = () => {
  const node = document.createElement('div');
  node.innerHTML = develog;

  // Event
  const userId = window.location.pathname.split('/')[2];

  const $allPostContainer = node.querySelector('.all-posts');

  postFunc.develogPageInitialRender(node.querySelector('.popular-posts'), $allPostContainer, userId);
  console.log('app', node.querySelector('.all-posts'));
  console.log('button', node.querySelector('.see-more'));
  node.querySelector('.develog-container').addEventListener('click', e => {
    if (e.target.className.split('__')[0] === 'post') {
      window.history.pushState(null, null, `/detail/${e.target.closest('li').dataset.postId}`);
    } else if (e.target.classList.contains('see-more')) {
      console.log(e.target);
      postFunc.getUserPosts($allPostContainer, userId);
    }
    console.log('button', document.querySelector('.see-more'));
  });

  return node.children;
};

export default develogNode;
