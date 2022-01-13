import axios from 'axios';
import validate from './validate';

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
				<span class="error-message hidden">이메일 형식에 맞게 입력해주세요.</span>
			</div>
			<div class="input-box">
				<label for="password">password</label>
				<input id="password" class="input-box__input" type="password" />
				<i class="complete hidden fas fa-check-circle"></i>
				<i class="error hidden fas fa-times-circle"></i>
				<span class="error-message hidden">6자리 이상 12자리 이하로 입력해주세요.</span>
			</div>
			<div class="sign-buttons signin">
			<button type="button" class="button">회원가입</button>
			<button type="submit" class="button" disabled>로그인</button>
			</div>
			<div class="singin-error-login"></div>
		</fieldset>
	</form>
</main>`;

const signinEvent = () => {
	const $signinBtn = document.querySelector('.sign-buttons.signin .button:last-child');
	const $input = document.querySelectorAll('.input-box__input');

	document.querySelector('.sign-form').oninput = e => {
		console.log(e.target.value);
		$input.forEach((input, index) => {
			if (e.target === input) validate.validate(e.target.value, index, $signinBtn);
		});
	};

	document.querySelector('.sign-buttons.signin .button:first-child').onclick = () => {
		window.history.pushState(null, null, '/signup');
	}
	$signinBtn.onclick = async e => {
		e.preventDefault();

		try {
			const {
				data: user
			} = await axios.post('/signin', {
				email: document.querySelector('#email').value,
				password: document.querySelector('#password').value
			});
			if (user) {
				window.history.pushState(null, null, '/');
				console.log('user id: ', user);
			}
		} catch (error) {
			document.querySelector('.singin-error-login').innerHTML = '아이디 또는 비밀번호가 잘못 입력 되었습니다.';
			console.error(error);
		}
	}
};

export default {
	signinHtml,
	signinEvent
};