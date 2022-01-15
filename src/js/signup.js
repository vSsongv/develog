import axios from 'axios';
import validate from './validate';

const signupHtml = `<header>
<!-- <img src=""> -->
<h1 class="logo">develog</h1>
</header>
<main>
<form class="sign-form">
  <fieldset>
    <legend class="a11yHidden">signup form</legend>
    <div class="input-box">
      <label for="email">email</label>
      <input id="email" class="input-box__input" type="email" autocomplete='off' />
      <button type="button" class="button double-check" disabled>중복확인</button>
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">제대로 입력해!!!</span>
      <span class="check-message hidden">다시 중복 확인하기!!!</span>
    </div>
    <div class="input-box">
      <label for="password">password</label>
      <input id="password" class="input-box__input" type="password" autocomplete='off' />
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">제대로 입력해!!!</span>
    </div>
    <div class="input-box">
      <label for="confirmPassword">confirm password</label>
      <input id="confirmPassword" class="input-box__input" type="password" autocomplete='off' />
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">제대로 입력해!!!</span>
    </div>
    <div class="input-box">
      <label for="name">name</label>
      <input id="name" class="input-box__input" type="text" autocomplete='off' />
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">제대로 입력해!!!</span>
    </div>
    <div class="input-box">
      <label for="nickname">nickname</label>
      <input id="nickname" class="input-box__input" type="text" autocomplete='off' />
      <button type="button" class="button double-check" disabled>중복확인</button>
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">제대로 입력해!!!</span>
      <span class="check-message hidden">다시 중복 확인하기!!!</span>
    </div>
    <div class="input-box">
      <label for="phone">phone</label>
      <input id="phone" class="input-box__input" type="tel" autocomplete='off' />
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">제대로 입력해!!!</span>
    </div>
    <div class="sign-buttons signup">
      <button type="button" class="button" disabled>회원가입</button>
    </div>
  </fieldset>
</form>
</main>
`;

const signupEvent = () => {
  const $signupBtn = document.querySelector('.sign-buttons.signup .button');
  const $input = document.querySelectorAll('.input-box__input');

  document.querySelector('.sign-form').oninput = e => {
    $input.forEach((input, index) => {
      if (e.target === input && e.target.matches('#confirmPassword'))
        return validate.validate(e.target.value !== document.querySelector('#password').value, index, $signupBtn);
      if (e.target === input) return validate.validate(e.target.value, index, $signupBtn);
    });
  };
  document.querySelectorAll('.double-check')[0].onclick = async e => {
    const { data: isDuplicate } = await axios.get('/check/email/' + $input[0].value);
    validate.isDuplicate(0, isDuplicate.isDuplicate);
  };
  document.querySelectorAll('.double-check')[1].onclick = async e => {
    const { data: isDuplicate } = await axios.get('/check/nickname/' + $input[4].value);
    validate.isDuplicate(4, isDuplicate.isDuplicate);
  };

  $signupBtn.onclick = async e => {
    e.preventDefault();

    try {
      const { data: maxId } = await axios.get('/users');
      const newId = maxId.maxId;
      const { data: user } = await axios.post('/signup', {
        userId: newId,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
        name: document.querySelector('#name').value,
        nickname: document.querySelector('#nickname').value,
        phone: document.querySelector('#phone').value,
        avartarUrl: 'img/defaultAvatar.png',
      });
      if (user) {
        window.history.pushState(null, null, '/signin');
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export default {
  signupHtml,
  signupEvent,
};
