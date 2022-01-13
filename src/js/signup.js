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
      <input id="email" class="input-box__input" type="email" />
      <button class="button double-check">중복확인</button>
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">제대로 입력해!!!</span>
    </div>
    <div class="input-box">
      <label for="password">password</label>
      <input id="password" class="input-box__input" type="password" />
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">제대로 입력해!!!</span>
    </div>
    <div class="input-box">
      <label for="confirmPassword">confirm password</label>
      <input id="confirmPassword" class="input-box__input" type="password" />
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">제대로 입력해!!!</span>
    </div>
    <div class="input-box">
      <label for="name">name</label>
      <input id="name" class="input-box__input" type="text" />
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">제대로 입력해!!!</span>
    </div>
    <div class="input-box">
      <label for="nickname">nickname</label>
      <input id="nickname" class="input-box__input" type="text" />
      <button class="button double-check">중복확인</button>

      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">제대로 입력해!!!</span>
    </div>
    <div class="input-box">
      <label for="phone">phone</label>
      <input id="phone" class="input-box__input" type="tel" />
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">제대로 입력해!!!</span>
    </div>
    <div class="sign-buttons signup">
      <button class="button">로그인</button>
      <button class="button" disabled>회원가입</button>
    </div>
  </fieldset>
</form>
</main>
`

const signupEvent = () => {
  const $signupBtn = document.querySelector('.sign-buttons.signup .button:last-child');
  const $input = document.querySelectorAll('.input-box__input');

  document.querySelector('.sign-form').oninput = e => {
    $input.forEach((input, index) => {
      if (e.target === input && e.target.matches('#confirmPassword')) return validate.validate(e.target.value !== document.querySelector('#password').value, index, $signupBtn);
      if (e.target === input) return validate.validate(e.target.value, index, $signupBtn);
    });
  };

  document.querySelector('.sign-buttons.signup .button:first-child').onclick = () => {
    window.history.pushState(null, null, '/signin');
  }
};

export default {
  signupHtml,
  signupEvent
};