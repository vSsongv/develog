import validate from './validate.js';
import axios from 'axios';

const mypageEditNode = () => {
  const node = document.createElement('div');
  node.innerHTML = `
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
        <i class="complete fas fa-check-circle"></i>
        <i class="error hidden fas fa-times-circle"></i>
        <span class="error-message hidden">이메일 형식에 맞게 입력하세요.</span>
      </div>
      <div class="input-box">
        <label for="password">password</label>
        <input id="password" class="input-box__input" type="password">
        <i class="complete passwordVal hidden fas fa-check-circle"></i>
        <i class="error passwordVal hidden fas fa-times-circle"></i>
        <span class="error-message passwordVal hidden">6~12자리의 비밀번호를 입력하세요.</span>
      </div>
      <div class="input-box">
        <label for="confirmPassword">confirm password</label>
        <input id="confirmPassword" class="input-box__input" type="password">
        <i class="complete passwordConfirmVal hidden fas fa-check-circle"></i>
        <i class="error passwordConfirmVal hidden fas fa-times-circle"></i>
        <span class="error-message passwordConfirmVal hidden">비밀번호를 확인하세요.</span>
      </div>
      <div class="input-box">
        <label for="name">name</label>
        <input id="name" class="input-box__input" type="text">
        <i class="complete nameVal fas fa-check-circle"></i>
        <i class="error nameVal hidden fas fa-times-circle"></i>
        <span class="error-message nameVal hidden">이름을 입력하세요.</span>
      </div>
      <div class="input-box">
        <label for="nickname">nickname</label>
        <input id="nickname" class="input-box__input" type="text">
        <button type="button" class="button double-check nicknameVal">중복확인</button>
        <i class="complete nicknameVal fas fa-check-circle"></i>
        <i class="error nicknameVal hidden fas fa-times-circle"></i>
        <span class="error-message nicknameVal hidden">닉네임을 한 글자 이상 입력해주세요.</span>
        <span class="check-message nicknameVal hidden">이미 사용 중인 닉네임입니다.</span>
      </div>
      <div class="input-box">
        <label for="phone">phone</label>
        <input id="phone" class="input-box__input" type="text">
        <i class="complete phoneVal fas fa-check-circle"></i>
        <i class="error phoneVal hidden fas fa-times-circle"></i>
        <span class="error-message phoneVal hidden">올바른 핸드폰 번호를 입력하세요.</span>
      </div>
      <div class="button-group">
        <button type="button" class="button button--back">돌아가기</button>
        <button type="button" class="button button--editComplete" disabled >수정완료</button>
      </div>
    </fieldset>
  </form>
</div>`;

  const userProfileSet = async avatar => {
    try {
      const { data: user } = await axios.get('/checkAuth');
      document.querySelector('#nickname').value = user.nickname;
      document.querySelector('#name').value = user.name;
      document.querySelector('#email').value = user.email;
      document.querySelector('#phone').value = user.phone;
      avatar.style.backgroundImage = `url('/public/assets/${user.avatarUrl}')`;
    } catch (e) {
      console.error(e);
    }
  };

  // const activeBtn = () => {
  //   const $checkComplete = [...node.querySelectorAll('.complete')].filter(i => !i.classList.contains('hidden'));
  //   if (node.querySelector('.double-check').style.backgroundColor === 'green' && $checkComplete.length === 6)
  //     $editBtn.removeAttribute('disabled');
  // };

  const $avatar = node.querySelector('.mypageEdit--avatar');
  userProfileSet($avatar);

  const $editBtn = node.querySelector('.button--editComplete');
  const $nickName = node.querySelector('#nickname');
  const $doubleCheckBtn = node.querySelector('.double-check');

  node.querySelector('.mypageEdit--form').oninput = e => {
    if (e.target === document.querySelector('#password'))
      validate.passwordValidate(e.target.value, document.querySelector('#confirmPassword').value);
    if (e.target === document.querySelector('#confirmPassword'))
      validate.passwordValidate(document.querySelector('#password').value, e.target.value);
    if (e.target === document.querySelector('#name')) validate.nameValidate(e.target.value);
    if (e.target === document.querySelector('#nickname')) validate.nicknameValidate(e.target.value);
    if (e.target === document.querySelector('#phone')) validate.phoneValidate(e.target.value);
  };

  $doubleCheckBtn.onclick = async () => {
    const { data: user } = await axios.get('/checkAuth');
    if (user.nickname === $nickName.value) {
      document.querySelector('.check-message').classList.add('hidden');
      $doubleCheckBtn.classList.add('checking');
      validate.activeSubmitButton();
    } else {
      const { data: isDuplicate } = await axios.get('/check/nickname/' + $nickName.value);
      validate.isNicknameDuplicate(isDuplicate.isDuplicate);
    }
  };

  const reader = new FileReader();
  reader.onload = () => {
    $avatar.style.backgroundImage = `url('${reader.result}')`;
  };
  node.querySelector('#selectImage').onchange = e => {
    reader.readAsDataURL(e.target.files[0]);
  };

  node.querySelector('.button--back').addEventListener('click', e => {
    e.preventDefault();
    window.history.back(1);
  });

  node.querySelector('.button--editComplete').addEventListener('click', async e => {
    e.preventDefault();

    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };

    try {
      const { data: user } = await axios.get('/checkAuth');

      const $fileImage = document.querySelector('#selectImage');

      const formData = new FormData();

      // avatar를 수정했을때
      if ($fileImage.files[0]) {
        formData.append('selectImage', $fileImage.files[0]);
        formData.append('filename', $fileImage.files[0].name);

        await axios.post('/uploadImage', formData, config).then(response => {
          if (response.status === 200) {
            axios.patch(`/editUser/${user.userId}`, {
              password: document.querySelector('#password').value,
              nickname: document.querySelector('#nickname').value,
              phone: document.querySelector('#phone').value,
              avatarUrl: $fileImage.files[0] ? `/public/assets/${$fileImage.files[0].name}` : user.avatarUrl,
            });
          }
        });
        // avatar를 수정하지 않았을때
      } else {
        axios.patch(`/editUser/${user.userId}`, {
          password: document.querySelector('#password').value,
          nickname: document.querySelector('#nickname').value,
          phone: document.querySelector('#phone').value,
          avatarUrl: $fileImage.files[0] ? `/public/assets/${$fileImage.files[0].name}` : user.avatarUrl,
        });
      }
    } catch (e) {
      console.log(e);
    }
    window.history.back(1);
  });

  return node.children;
};

export default mypageEditNode;
