import axios from 'axios';
require('lodash.debounce');

const setPostData = ({ post, user }, loginUserId, userClickedHeart) =>
  `
<section class="detail">
	<h1 class="detail__title">${post.title}</h1>
	<div class="detail__info">
    <button class="avatar-button avatar-button--size" style="background-image:url('${user.avatarUrl}')"></button>
		<span class="author">${user.nickname}</span>
		<button class="${userClickedHeart ? 'none ' : ''}fullheart heart-btn btn">
			<i class="far fa-heart"></i>
		</button>
		<button class="${userClickedHeart ? '' : 'none '}fullheart heart-btn btn">
			<i class="fas fa-heart"></i>
		</button>
		<button class="${loginUserId === post.userId ? '' : 'none '}edit pencil-btn btn">
			<i class="far fa-edit"></i>
		</button>
		<button class="${loginUserId === post.userId ? '' : 'none '}edit trash-btn btn">
			<i class="far fa-trash-alt"></i>
		</button>
	</div>
	<pre class="detail__content">${post.content}</pre>
</section>

<h2 class="comments-title">댓글</h2>
<section class="user-comment">
	<div class="comment__user-info">
    <button class="avatar-button avatar-button--size" style="background-image:url('${user.avatarUrl}')"></button>
		<span class="user-id">${user.nickname}</span>
	</div>
	<div class="textarea-container">
		<textarea class="textarea" id="input-box" rows="3" maxlength="100" placeholder="댓글을 입력해주세요."></textarea>
		<button class="textarea__cancel btn no-display">
			<i class="fas fa-times"></i>
		</button>
	</div>
	<button class="user-comment__upload button">등록</button>
</section>

<section class="comments">
	<div class="comment">
		<div class="comment__user-info">
    <button class="avatar-button avatar-button--size" style="background-image:url('${user.avatarUrl}')"></button>
			<span class="user-id"></span>
		</div>
		<div class="comment__text">
			<span></span>
		</div>
		<button class="${loginUserId === post.userId ? '' : 'none '}edit pencil-btn btn">
			<i class="far fa-edit"></i>
		</button>
		<button class="${loginUserId === post.userId ? '' : 'none '}edit trash-btn btn">
			<i class="far fa-trash-alt"></i>
		</button>
	</div>
</section>
`;

const detailEvents = async $detailNode => {
  const parseUrlPostId = window.location.pathname.split('/');
  let postUserId;
  let isFullHeart;
  let loginUserId;

  try {
    const {
      data: { userId },
    } = await axios.get('/checkAuth');
    loginUserId = userId;

    const postData = await axios.get(`/posts/${parseUrlPostId[parseUrlPostId.length - 1]}`);
    postUserId = postData.data.post.userId;

    const commentData = await axios.get(`/comments/${parseUrlPostId[parseUrlPostId.length - 1]}`);
    const {
      data: { likedUsers },
    } = await axios.get(`/posts/likedUsers/${parseUrlPostId[parseUrlPostId.length - 1]}`);
    const userClickedHeart = likedUsers.find(elem => elem === +loginUserId) ? true : false;

    $detailNode.innerHTML = setPostData(postData.data, loginUserId, userClickedHeart);

    // textarea evetns
    $detailNode.querySelector('.textarea').addEventListener('focus', () => {
      const $textareaCancel = document.querySelector('.textarea__cancel');
      $textareaCancel.removeAttribute('disabled');
      $textareaCancel.classList.toggle('no-display');
      $textareaCancel.style.color = 'black';
      $textareaCancel.style.cursor = 'pointer';
    });

    $detailNode.querySelector('.textarea__cancel').addEventListener('click', () => {
      document.querySelector('.textarea').value = '';
    });

    $detailNode.querySelector('.textarea').addEventListener('blur', () => {
      const $textareaCancel = document.querySelector('.textarea__cancel');
      $textareaCancel.classList.toggle('no-display');
      $textareaCancel.style.color = 'transparent';
      $textareaCancel.style.cursor = 'unset';
    });
    console.log(loginUserId);

    $detailNode.querySelector('.user-comment__upload').addEventListener('click', () => {
      if (loginUserId) alert('댓글을 달려면 로그인이 필요합니다.');
    });

    $detailNode.querySelector('.detail__info').addEventListener('click', async e => {
      if (e.target.classList.contains('detail__info') || e.target.classList.contains('author')) return;
      if (e.target.classList.contains('avatar-button')) window.history.pushState('user', '', `/develog/${postUserId}`);
      if (e.target.classList.contains('fa-heart') || e.target.parentNode.classList.contains('fa-heart')) {
        if (!loginUserId) alert('좋아요를 누르시려면 로그인이 필요합니다.');
        else {
          $detailNode.querySelectorAll('.heart-btn').forEach(elem => elem.classList.toggle('none'));
          isFullHeart =
            e.target.getAttribute('data-prefix') === 'far'
              ? true
              : e.target.parentNode.getAttribute('data-prefix') === 'far'
              ? true
              : false;
          axios.patch(`/posts/likedUsers/${parseUrlPostId[parseUrlPostId.length - 1]}`, { loginUserId, isFullHeart });
        }
        // await axios.patch('/posts/likedUsers', { postId: url[url.length - 1], userId: user.userId, isFullHeart });
      }
      // 로그인한 사용자의 id로 patch
      // axios.patch

      // 만약 로그인 했다면 edit 버튼들 활성화시키는 로직 추가
      if (e.target.parentNode.classList.contains('pencil-btn')) {
        window.history.pushState('edit', '', '/write');
      } else if (e.target.parentNode.classList.contains('trash-btn')) {
        axios.delete(`/posts/${parseUrlPostId[parseUrlPostId.length - 1]}`);
        window.history.pushState('delete', '', '/');
      }
    });
  } catch (error) {
    console.error(error);
  }
  return $detailNode.children;
};

export default detailEvents;
