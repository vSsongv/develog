import axios from 'axios';
import header from './header';
import detail from '../html/detail.html';

const $root = document.querySelector('.root');

const detailrender = _detailHtml => {
  $root.innerHTML = _detailHtml;
};

const setPostData = ({ post, user }, { userId: loginUserId }) => {
  // 로그인 된 사용자의
  // const likePost = post.likedUsers.find(id => )
  // const loginUser = await axios.get('/checkAuth');
  const likePost = false;
  const _detailHtml = `<header class="header">
  <h1 class="header--logo">develog</h1>
  <form class="search--form" action="">
    <input id="search" class="search--hidden" type="text" />
    <label for="search" class="fas fa-search"></label>
  </form>
  
  <button class="button button--login">Login</button>
  
  <button class="button button--posting">Posting</button>

  <div class="user hidden"></div>

  <nav class="nav-box hidden">
    <ul>
      <li>내 블로그</li>
      <li>마이페이지</li>
      <li>로그아웃</li>
    </ul>
  </nav>
</header>
<main class="detail-container">
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
</main>
`;
  detailrender(_detailHtml);
};

const detailUrlEvents = async () => {
  detailrender(detail);
  const url = window.location.pathname.split('/');
  const { data: user } = await axios.get('/checkAuth');

  try {
    const postData = await axios.get(`/posts/${url[url.length - 1]}`);

    if (postData.status === 200) {
      setPostData(postData.data, user);
      // 로그인된 사용자가 heart 눌렀을 때 경우
    }
  } catch (err) {
    console.error(err);
  }

  const $textarea = document.querySelector('.textarea');
  const $textareaCancel = document.querySelector('.textarea__cancel');
  const $postInfoEvent = document.querySelector('.detail__info');
  const $heartBtns = document.querySelectorAll('.heart-btn');
  const $postEditBtns = document.querySelectorAll('.detail__info .edit');
  const $commentEditBtns = document.querySelectorAll('.comment .edit');
  // header events
  header.headerEvent();

  // textarea evetns
  $textarea.addEventListener('focus', () => {
    $textareaCancel.removeAttribute('disabled');
    $textareaCancel.classList.toggle('no-display');
    $textareaCancel.style.color = 'black';
    $textareaCancel.style.cursor = 'pointer';
    $textareaCancel.addEventListener('click', () => {
      $textarea.value = '';
    });
  });

  $textarea.addEventListener('blur', () => {
    $textareaCancel.classList.toggle('no-display');
    $textareaCancel.style.color = 'transparent';
    $textareaCancel.style.cursor = 'unset';
    $textareaCancel.setAttribute('disabled');
  });

  // detail__info events
  $postInfoEvent.addEventListener('click', async e => {
    // 해당 user의 메인페이지로 이동
    if (e.target.classList.contains('detail__info') || e.target.classList.contains('author')) return;
    if (e.target.classList.contains('avatar-button')) window.history.pushState('user', '', '/');

    if (e.target.classList.contains('fa-heart')) {
      console.log('test1');
      if (!user) alert('좋아요를 누르시려면 로그인이 필요합니다.');
      else {
        const isEmptyHeart = e.target.classList.contains('far');
        axios.patch('/posts/likedUsers', { userId: user.userId, isEmptyHeart });
        console.log('test2');
        $heartBtns.forEach(elem => elem.classList.toggle('none'));
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
};

export default detailUrlEvents;
