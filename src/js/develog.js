let allPost = {};

const msnry = new Masonry('.all-posts', {
  itemSelector: '.post',
  columnWidth: '.post-sizer',
  percentPosition: true,
  gutter: 40,
});

const $seeMoreBtn = document.querySelector('.see-more');
const $popularPostContainer = document.querySelector('.popular-posts__title');
const $allPostContainer = document.querySelector('.all-posts');

const addPopularPosts = posts => {
  $popularPostContainer.innerHTML = posts
    .map(post =>
      `<li class="post">
      <span class="post__title">${post.title}</span>` + posts.imgUrl
        ? `<img src="${post.imgUrl}">`
        : '' +
          `<span class="post__desc">${post.contents}</span>
    </li>`
    )
    .join('');
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

const fetchPosts = async () => {
  try {
    const { data } = await request.getPosts();
    allPost = data;
    // 여기서 좋아요 순으로 정렬한 다음에 앞에 3개만 addPopular 보내기.
    addPopularPosts(data);
    // date 순으로 정렬한 다음에 addAllPosts 보내기
    addAllPosts(data);
  } catch (e) {
    console.errer(e);
  }
};

window.addEventListener('DOMContentLoaded', fetchPosts);
$seeMoreBtn.addEventListener('click', () => {});
