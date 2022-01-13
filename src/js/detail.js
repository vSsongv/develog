const detailHTML = `<header class="header">
	<h1 class="header--logo">develog</h1>

	<form class="search--form" action="">
		<input id="search" class="search--hidden" type="text" />
		<label for="search" class="fas fa-search"></label>
	</form>

	<button class="button button--login">Login</button>

	<div class="user hidden">
		<img class="avatar" src="./assets/avatar.png" alt="avatar image" />
	</div>

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
		<h1 class="detail__title">postTitle</h1>
		<div class="detail__info">
			<img class="avatar-button avatar-button--size" src="./assets/종빈이.png" alt="avatar-button" />
			<span class="author">postAuthor</span>
			<button class="no-display heart-btn btn">
				<i class="far fa-heart"></i>
			</button>
			<button class="fullheart heart-btn btn">
				<i class="fas fa-heart"></i>
			</button>
			<button class="edit pencil-btn btn">
				<i class="bx bx-pencil"></i>
			</button>
			<button class="edit trash-btn btn">
				<i class="far fa-trash-alt"></i>
			</button>
		</div>

		<pre class="detail__content">
			postContent
		</pre>
	</section>

	<h2 class="comments-title">댓글</h2>
	<section class="user-comment">
		<div class="comment__user-info">
			<img
				class="avatar-button avatar-button--size"
				src=imgUrl
				class="user__avatar"
				alt="user-avatar"
			/>
			<span class="user-id">minsoftk</span>
		</div>

		<div class="textarea-container">
			<textarea class="textarea" id="input-box" rows="3" maxlength="100"></textarea>
			<span class="input-comment">댓글을 입력해주세요.</span>
			<button class="textarea__cancel btn">
				<i class="fas fa-times"></i>
			</button>
		</div>
		<button class="user-comment__upload button">등록</button>
	</section>

	<section class="comments">
		<div class="comment">
			<div class="comment__user-info">
				<img
					class="avatar-button avatar-button--size"
					src=imgUrl
					class="user__avatar"
					alt="user-avatar"
				/>
				<span class="user-id">minsoftk</span>
			</div>
			<div class="comment__text">vsdfsfsdfsdfsdfsafasfssdfsfsdfsdfsdfsafasfssdfsfsdfsdfsdfsafasfs</div>
			<button class="edit pencil-btn btn">
				<i class="bx bx-pencil"></i>
			</button>
			<button class="edit trash-btn btn">
				<i class="far fa-trash-alt"></i>
			</button>
		</div>
	</section>
</main>`;

const detailEvent = () => {
  document.querySelector('.header--logo').addEventListener('click', () => {
    window.history.pushState({ data: 'index' }, '', '/');
  });

  document.querySelector();
  const $userinfo = document.querySelector('.user-info');
};

// export default render;
export default {
  detailHTML,
  detailEvent,
};
