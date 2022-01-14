import axios from 'axios';
import header from './header';

const detailHtml = `<header class="header">
	<h1 class="header--logo">develog</h1>

	<form class="search--form" action="">
		<input id="search" class="search--hidden" type="text" />
		<label for="search" class="fas fa-search"></label>
	</form>

	<button class="button button--login">Login</button>

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
		<h1 class="detail__title"></h1>
		<div class="detail__info">
			<img class="avatar-button avatar-button--size" src="" alt="avatar-button" />
			<span class="author"></span>
			<button class="no-display heart-btn btn">
				<i class="far fa-heart"></i>
			</button>
			<button class="fullheart heart-btn btn">
				<i class="fas fa-heart"></i>
			</button>
			<button class="edit pencil-btn btn">
				<i class="bx bx-pencil"></i>
			</button>
			<button class="edit post-trash-btn btn">
				<i class="far fa-trash-alt"></i>
			</button>
		</div>

		<pre class="detail__content">
			
		</pre>
	</section>

	<h2 class="comments-title">댓글</h2>
	<section class="user-comment">
		<div class="comment__user-info">
			<img
				class="avatar-button avatar-button--size"
				src=""
				class="user__avatar"
				alt="user-avatar"
			/>
			<span class="user-id"></span>
		</div>

		<div class="textarea-container">
			<textarea class="textarea" id="input-box" rows="3" maxlength="100" placeholder="댓글을 입력해주세요."></textarea>
			<button class="no-display textarea__cancel btn">
				<i class="fas fa-times"></i>
			</button>
		</div>
		<button class="user-comment__upload button">등록</button>
	</section>

	<section class="comments">
		<div class="comment">
			<div class="comment__user-info comment__user-info--border">
				<img
					class="avatar-button avatar-button--size"
					src=""
					class="user__avatar"
					alt="comment-user-avatar"
				/>
				<span class="user-id"></span>
			</div>
			<div class="comment__text">
            <span></span>
          </div>
			<button class="edit pencil-btn btn">
				<i class="bx bx-pencil"></i>
			</button>
			<button class="edit comment-trash-btn btn">
				<i class="far fa-trash-alt"></i>
			</button>
		</div>
	</section>
</main>`;

const detailEvent = async () => {
  const url = window.location.pathname.split('/');
  console.log(url);
  const data = await axios.get('/post/');
  header.headerEvent();
  const $textarea = document.querySelector('.textarea');
  const $textareaCancel = document.querySelector('.textarea__cancel');

  // postevents

  // textarea evetns
  $textarea.addEventListener('focus', () => {
    $textareaCancel.removeAttribute('disabled');
    $textareaCancel.classList.toggle('no-display');
    $textareaCancel.style.color = 'black';
    $textareaCancel.style.cursor = 'pointer';
    document.querySelector('.textarea__cancel').addEventListener('click', () => {
      $textarea.value = '';
    });
  });

  $textarea.addEventListener('blur', () => {
    $textareaCancel.setAttribute('disabled');
    $textareaCancel.classList.toggle('no-display');
    $textareaCancel.style.color = 'transparent';
    $textareaCancel.style.cursor = 'unset';
  });
};

// export default render;
export default {
  detailHtml,
  detailEvent,
};
