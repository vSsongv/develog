import axios from 'axios';
import validate from './validate';
import signin from '../html/signin.html';

const signinNode = () => {
	const node = document.createElement('div');
	node.innerHTML = signin;

	const $signinBtn = node.querySelector('.sign-buttons.signin .button:last-child');

	node.querySelector('.sign-form').oninput = e => {
		if (e.target === document.querySelector('#email')) validate.emailValidate(e.target.value);
		if (e.target === document.querySelector('#password')) validate.passwordValidate(e.target.value);
	};

	node.querySelector('.sign-buttons.signin .button:first-child').onclick = () => {
		window.history.pushState(null, null, '/signup');
	};

	$signinBtn.onclick = async e => {
		e.preventDefault();

		try {
			const {
				data: user
			} = await axios.post('/signin', {
				email: document.querySelector('#email').value,
				password: document.querySelector('#password').value,
			});
			if (user) {
				window.history.pushState(null, null, '/');
				window.location.reload();
			}
		} catch (error) {
			document.querySelector('.singin-error-login').innerHTML = '아이디 또는 비밀번호가 잘못 입력 되었습니다.';
			console.error(error);
		}
	};

	return node.children;
};

export default signinNode;