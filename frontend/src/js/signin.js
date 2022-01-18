import axios from 'axios';
import validate from './validate';

const signinNode = () => {
  const node = document.createElement('div');
  node.innerHTML = `
	<header>
		<h1 class="logo">develog</h1>
	</header>

	<main>
		<form class="sign-form">
			<fieldset>
				<legend class="a11yHidden">signin form</legend>
				<div class="input-box">
					<label for="email">email</label>
					<input id="email" class="input-box__input" type="email" autocomplete='off' />
					<i class="complete hidden emailVal fas fa-check-circle"></i>
					<i class="error hidden emailVal fas fa-times-circle"></i>
					<span class="error-message hidden emailVal">이메일 형식에 맞게 입력해주세요.</span>
				</div>
				<div class="input-box">
					<label for="password">password</label>
					<input id="password" class="input-box__input" type="password" autocomplete='off' />
					<i class="complete hidden passwordVal fas fa-check-circle"></i>
					<i class="error hidden passwordVal fas fa-times-circle"></i>
					<span class="error-message hidden passwordVal">6자리 이상 12자리 이하로 입력해주세요.</span>
				</div>
				<div class="sign-buttons signin">
					<button type="button" class="button">회원가입</button>
					<button type="submit" class="button" disabled>로그인</button>
				</div>
				<div class="singin-error-login"></div>
			</fieldset>
		</form>
	</main>`;

  // Event
  const $signinBtn = node.querySelector('.sign-buttons.signin .button:last-child');

  node.querySelector('.sign-form').oninput = e => {
    if (e.target === node.querySelector('#email')) validate.emailValidate(e.target.value);
    if (e.target === node.querySelector('#password')) validate.passwordValidate(e.target.value);
  };

  node.querySelector('.sign-buttons.signin .button:first-child').onclick = () => {
    window.history.pushState(null, null, '/signup');
  };

  $signinBtn.onclick = async e => {
    e.preventDefault();

    try {
      const { data: user } = await axios.post('/signin', {
        email: node.querySelector('#email').value,
        password: node.querySelector('#password').value,
      });
      if (user) {
        window.history.pushState(null, null, '/');
        window.location.reload();
      }
    } catch (error) {
      node.querySelector('.singin-error-login').innerHTML = '아이디 또는 비밀번호가 잘못 입력 되었습니다.';
      console.error(error);
    }
  };

  return node.children;
};

export default signinNode;
