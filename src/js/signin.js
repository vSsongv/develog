// import validate from './validate.js';

const signinHtml = `<header>
	<!-- <img src=""> -->
	<h1 class="logo">develog</h1>
</header>
<main>
	<form class="sign-form">
		<fieldset>
			<legend class="a11yHidden">signin form</legend>
			<div class="input-box">
				<label for="email">email</label>
				<input id="email" class="input-box__input" type="email" />
				<i class="complete hidden fas fa-check-circle"></i>
				<i class="error hidden fas fa-times-circle"></i>
				<span class="error-message hidden">ㅎㅕㄴ서 힘내.</span>
			</div>
			<div class="input-box">
				<label for="password">password</label>
				<input id="password" class="input-box__input" type="password" />
				<i class="complete hidden fas fa-check-circle"></i>
				<i class="error hidden fas fa-times-circle"></i>
				<span class="error-message hidden">ㅎㅕㄴ서 힘내.</span>
			</div>
			<div class="sign-buttons">
				<button class="button">회원가입</button>
				<button class="button">로그인</button>
			</div>
		</fieldset>
	</form>
</main>`;

const signinEvent = () => {
  // const $signinBtn = document.querySelector('.sign-buttons .button:last-child');
  // const $input = document.querySelectorAll('.input-box__input');
  // document.querySelector('.sign-form').oninput = e => {
  //   $input.forEach((input, index) => {
  //     if (e.target === input) validate.validate(e.target.value, index, $signinBtn);
  //   });
  // };
};

export default { signinHtml, signinEvent };
