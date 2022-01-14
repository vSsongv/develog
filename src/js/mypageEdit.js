import validate from './validate.js';
import axios from 'axios';

const mypageEditHtml = `<header>
<h1 class="logo">develog</h1>
</header>

<div class="container">
<form class="image--form" method="post" enctype="multipart/form-data">
</form>

<form class="mypageEdit" action="/upload" enctype="multipart/form-data">
<label class="label--avatar" for="selectImage">
  <div class="mypageEdit--avatar">
    <i class='plusIcon bx bx-plus-circle'></i>
  </div>
</label>
<input type="file" class="a11yHidden " name="selectImage" id="selectImage" accept="image/*">
  <fieldset class="mypageEdit--form">
    <legend class="a11yHidden">user profile edit form</legend>
    <div class="input-box">
      <label for="email">email</label>
      <input id="email" class="input-box__input" type="email" disabled>
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">이메일 형식에 맞게 입력하세요.</span>
    </div>
    <div class="input-box">
      <label for="password">password</label>
      <input id="password" class="input-box__input" type="password">
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">6~12자리의 비밀번호를 입력하세요.</span>
    </div>
    <div class="input-box">
      <label for="confirmPassword">confirm password</label>
      <input id="confirmPassword" class="input-box__input" type="password">
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">비밀번호를 확인하세요.</span>
    </div>
    <div class="input-box">
      <label for="name">name</label>
      <input id="name" class="input-box__input" type="text">
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">이름을 입력하세요.</span>
    </div>
    <div class="input-box">
      <label for="nickname">nickname</label>
      <input id="nickname" class="input-box__input" type="text">
      <button class="button double-check">중복확인</button>
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">닉네임을 입력하세요.</span>
    </div>
    <div class="input-box">
      <label for="phone">phone</label>
      <input id="phone" class="input-box__input" type="text">
      <i class="complete hidden fas fa-check-circle"></i>
      <i class="error hidden fas fa-times-circle"></i>
      <span class="error-message hidden">올바른 핸드폰 번호를 입력하세요.</span>
    </div>
    <div class="button-group">
      <button type="button" class="button button--back">돌아가기</button>
      <button type="button" class="button button--editComplete">수정완료</button>
    </div>
  </fieldset>
</form>
</div>`;
const userProfileSet = async avartar => {
  try {
    const { data: user } = await axios.get('/checkAuth');
    document.getElementById('nickname').value = user.nickname;
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;
    avartar.style.backgroundImage = `url('${user.avartarUrl}')`;
  } catch (e) {
    console.error(e);
    // window.history.pushState({}, '', '/signin');
  }
};

const mypageEditEvent = () => {
  const $avartar = document.querySelector('.mypageEdit--avatar');
  userProfileSet($avartar);

  const $editBtn = document.querySelector('.button--editComplete');

  const $input = document.querySelectorAll('.input-box__input');
  document.querySelector('.mypageEdit--form').oninput = e => {
    $input.forEach((input, index) => {
      if (e.target === input && e.target.matches('#confirmPassword'))
        return validate.validate(e.target.value !== document.querySelector('#password').value, index, $editBtn);
      if (e.target === input) return validate.validate(e.target.value, index, $editBtn);
    });
  };

  const reader = new FileReader();
  reader.onload = () => {
    $avartar.style.backgroundImage = `url('${reader.result}')`;
  };
  document.querySelector('#selectImage').onchange = e => {
    reader.readAsDataURL(e.target.files[0]);
  };

  document.querySelector('.button--back').addEventListener('click', e => {
    e.preventDefault();
    window.history.back(1);
  });

  document.querySelector('.button--editComplete').addEventListener('click', async e => {
    console.log(document.querySelector('#selectImage').value);
    console.log(document.querySelector('#selectImage').files);
    console.log(e);
    e.preventDefault();

    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };

    try {
      const { data: user } = await axios.get('/checkAuth');

      const $fileImage = document.querySelector('#selectImage');

      const formData = new FormData();

      formData.append('selectImage', $fileImage.files[0]);
      formData.append('filename', $fileImage.files[0].name);

      await axios.post('/uploadImage', formData, config).then(response => {
        if (response.status === 200) {
          axios.patch(`/editUser/${user.userId}`, {
            password: document.getElementById('password').value,
            nickname: document.getElementById('nickname').value,
            phone: document.getElementById('phone').value,
            avartarUrl: `/img/${$fileImage.files[0].name}`,
          });
        }
      });
    } catch (e) {
      console.error(e);
    }
  });
};

export default { mypageEditHtml, mypageEditEvent };
