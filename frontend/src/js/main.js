import * as postFunc from './showPost';

const mainNode = () => {
  const node = document.createElement('div');
  node.innerHTML = `
<section class="main-container">
  <ul class="posts-container"></ul>
  <button class="see-more see-more--main">더보기</button>
  <span class="is-last-post hidden">더 이상 포스트가 없습니다.</span>
</section>`;

  // Event
  postFunc.mainPageInitialRender(node.querySelector('.posts-container'));
  console.log(node.querySelector('.see-more'));
  node.querySelector('.see-more').addEventListener('click', postFunc.getMorePostsForMain);

  node.querySelector('.main-container').addEventListener('click', e => {
    if (e.target.classList.contains('avatar-button') || e.target.classList.contains('user-nickname')) {
      history.pushState(null, null, `/develog/${e.target.parentNode.dataset.userId}`);
    } else if (e.target.className.split('__')[0].includes('main-post')) {
      history.pushState(null, null, `/detail/${e.target.closest('li').dataset.postId}`);
    }
  });

  return node.children;
};

export default mainNode;
