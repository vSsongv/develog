import axios from 'axios';

const setPostData = ({ post, user }) =>
  // 로그인 된 사용자의
  {
    const likePost = false;
    const loginUserId = 1;
    // const likePost = post.likedUsers.find(id => )
    // console.log(post.title, user);
    return `
		<section class="detail">
			<h1 class="detail__title">${post.title}</h1>
			<div class="detail__info">
				<button class="btn">
					<img class="avatar-button avatar-button--size" src="${user.avatarUrl}" alt="avatar-button" />
				</button>
				<span class="author">${user.nickname}</span>
				<button class="${likePost ? 'none ' : ''}heart-btn btn">
					<i class="far fa-heart"></i>
				</button>
				<button class="${likePost ? '' : 'none '}fullheart heart-btn btn">
					<i class="fas fa-heart"></i>
				</button>
				<button class="${loginUserId === post.userId ? '' : 'none '}edit pencil-btn btn">
					<i class="bx bx-pencil"></i>
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
				<button class="btn">
					<img class="avatar-button avatar-button--size" src="${user.avatarUrl}"  alt="user-avatar" />
				</button>
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
					<button class="btn">
						<img class="avatar-button avatar-button--size" src="${user.avatarUrl}" alt="user-avatar" />
					</button>
					<span class="user-id">minsoftk</span>
				</div>
				<div class="comment__text">
					<span> test </span>
				</div>
				<button class="none edit pencil-btn btn">
					<i class="bx bx-pencil"></i>
				</button>
				<button class="none edit trash-btn btn">
					<i class="far fa-trash-alt"></i>
				</button>
			</div>
		</section>
`;
  };

const detailEvents = async $detailNode => {
  const parseUrlUserId = window.location.pathname;
  let postUserId;
  try {
    let postUserId = 0;
    const url = window.location.pathname.split('/');
    const { data: user } = await axios.get('/checkAuth');
    const postData = await axios.get(`/posts/${parseUrlUserId[parseUrlUserId.length - 1]}`);
    postUserId = postData.data.post.userId;
    $detailNode.innerHTML = setPostData(postData.data);

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
      $textareaCancel.setAttribute('disabled');
    });

    $detailNode.querySelector('.detail__info').addEventListener('click', async e => {
      if (e.target.classList.contains('detail__info') || e.target.classList.contains('author')) return;
      // move to post's user page
      if (e.target.classList.contains('avatar-button')) window.history.pushState('user', '', `/develog/${postUserId}`);
      if (e.target.classList.contains('fa-heart')) {
        if (!user) alert('좋아요를 누르시려면 로그인이 필요합니다.');
        else {
          const isEmptyHeart = e.target.classList.contains('far');
          axios.patch('/posts/likedUsers', { userId: user.userId, isEmptyHeart });
          $heartBtns.forEach(elem => elem.classList.toggle('none'));

          await axios.patch('/posts/likedUsers', { postId: url[url.length - 1], userId: user.userId, isEmptyHeart });
        }

        // 로그인한 사용자의 id로 patch
        // axios.patch
      }

      // 만약 로그인 했다면 edit 버튼들 활성화시키는 로직 추가
      if (e.target.parentNode.classList.contains('pencil-btn')) {
        window.history.pushState('edit', '', '/write');
      } else if (e.target.parentNode.classList.contains('trash-btn')) {
        // 포스트 글 삭제

        axios.delete(`/posts/${url[url.length - 1]}`);
        window.history.pushState('delete', '', '/');
      }
    });

    return $detailNode.children;
  } catch (error) {
    console.error(error);
  }
};

export default detailEvents;
