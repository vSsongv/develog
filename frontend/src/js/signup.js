import axios from 'axios';
import validate from './validate';

const signupNode = () => {
  const node = document.createElement('div');
  node.innerHTML = `
  <header>
    <!-- <img src=""> -->
    <h1 class="logo">develog</h1>
  </header>
  <main>
  <form class="sign-form"  autocomplete="off">
    <fieldset>
      <legend class="a11yHidden">signup form</legend>
      <div class="input-box">
        <label for="email">email</label>
        <input id="email" class="input-box__input" type="email" autocomplete="off" />
        <button type="button" class="button double-check emailVal" disabled>중복확인</button>
        <i class="complete emailVal hidden fas fa-check-circle"></i>
        <i class="error emailVal hidden fas fa-times-circle"></i>
        <span class="error-message emailVal hidden">이메일 형식에 맞게 입력해주세요.</span>
        <span class="check-message emailVal hidden">이미 사용 중인 닉네임입니다.</span>
      </div>
      <div class="input-box">
        <label for="password">password</label>
        <input id="password" class="input-box__input" type="password" autocomplete="off" />
        <i class="complete passwordVal hidden fas fa-check-circle"></i>
        <i class="error passwordVal hidden fas fa-times-circle"></i>
        <span class="error-message passwordVal hidden">6자리 이상 12자리 이하의 영문, 숫자를 입력해주세요.</span>
      </div>
      <div class="input-box">
        <label for="confirmPassword">confirm password</label>
        <input id="confirmPassword" class="input-box__input" type="password" autocomplete="off" />
        <i class="complete passwordConfirmVal hidden fas fa-check-circle"></i>
        <i class="error passwordConfirmVal hidden fas fa-times-circle"></i>
        <span class="error-message passwordConfirmVal hidden">비밀번호가 일치하지 않습니다.</span>
      </div>
      <div class="input-box">
        <label for="name">name</label>
        <input id="name" class="input-box__input" type="text" autocomplete="off" />
        <i class="complete nameVal hidden fas fa-check-circle"></i>
        <i class="error nameVal hidden fas fa-times-circle"></i>
        <span class="error-message nameVal hidden">이름을 한 글자 이상 입력해주세요.</span>
      </div>
      <div class="input-box">
        <label for="nickname">nickname</label>
        <input id="nickname" class="input-box__input" type="text" autocomplete="off" />
        <button type="button" class="button double-check nicknameVal" disabled>중복확인</button>
        <i class="complete nicknameVal hidden fas fa-check-circle"></i>
        <i class="error nicknameVal hidden fas fa-times-circle"></i>
        <span class="error-message nicknameVal hidden">닉네임을 한 글자 이상 입력해주세요.</span>
        <span class="check-message nicknameVal hidden">이미 사용 중인 닉네임입니다.</span>
      </div>
      <div class="input-box">
        <label for="phone">phone</label>
        <input id="phone" class="input-box__input" type="tel" autocomplete="off" />
        <i class="complete phoneVal hidden fas fa-check-circle"></i>
        <i class="error phoneVal hidden fas fa-times-circle"></i>
        <span class="error-message phoneVal hidden">전화번호 형식에 맞게 입력해주세요.</span>
      </div>
      <div class="sign-buttons signup">
        <button type="button" class="button" disabled>회원가입</button>
      </div>
    </fieldset>
  </form>
  </main>
  `;

  const $signupBtn = node.querySelector('.sign-buttons.signup .button');
  const $input = node.querySelectorAll('.input-box__input');

  node.querySelector('.sign-form').oninput = e => {
    if (e.target === node.querySelector('#email')) validate.emailValidate(e.target.value)
    if (e.target === node.querySelector('#password')) validate.passwordValidate(e.target.value, node.querySelector('#confirmPassword').value)
    if (e.target === node.querySelector('#confirmPassword')) validate.passwordValidate(node.querySelector('#password').value, e.target.value)
    if (e.target === node.querySelector('#name')) validate.nameValidate(e.target.value)
    if (e.target === node.querySelector('#nickname')) validate.nicknameValidate(e.target.value)
    if (e.target === node.querySelector('#phone')) validate.phoneValidate(e.target.value)
  };

  node.querySelector('.double-check.emailVal').onclick = async () => {
    const {
      data: isDuplicate
    } = await axios.get('/check/email/' + $input[0].value);
    validate.isEmailDuplicate(isDuplicate.isDuplicate);
  };

  node.querySelector('.double-check.nicknameVal').onclick = async () => {
    const {
      data: isDuplicate
    } = await axios.get('/check/nickname/' + $input[4].value);
    validate.isNicknameDuplicate(isDuplicate.isDuplicate);
  };

  $signupBtn.onclick = async e => {
    e.preventDefault();

    try {
      const {
        data: maxId
      } = await axios.get('/users');
      const newId = maxId.maxId;
      const {
        data: user
      } = await axios.post('/signup', {
        userId: newId,
        email: node.querySelector('#email').value,
        password: node.querySelector('#password').value,
        name: node.querySelector('#name').value,
        nickname: node.querySelector('#nickname').value,
        phone: node.querySelector('#phone').value,
        avartarUrl: 'img/defaultAvatar.png',
      });
      if (user) {
        window.history.pushState(null, null, '/signin');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return node.children;
};

export default signupNode;