import index from './js/index';
import signin from './js/signin';
import signup from './js/signup';
import detail from './js/detail';
import mypage from './js/mypage';
import mypageEdit from './js/mypageEdit';
import header from './js/header';

const history = require('history-events');

const $root = document.querySelector('.root');

const render = html => {
  $root.innerHTML = html;
};

const switchDependsOnUrl = () => {
  switch (window.location.pathname) {
    case '/':
      render(index.indexHtml);
      index.indexEvent();
      break;
    case '/detail':
<<<<<<< HEAD
      render(detail.detailHtml);
=======
      console.log('switch');
      render(detail.detailHTML);
>>>>>>> b67b8e5eb2d1175389417c3c6338b52805d2c4a8
      detail.detailEvent();
      break;
    case '/signin':
      render(signin.signinHtml);
      signin.signinEvent();
      break;
    case '/signup':
      render(signup.signupHtml);
      signup.signupEvent();
      break;
    case '/develog':
      // Develog
      break;
    case '/mypage':
      render(mypage.mypageHtml);
      mypage.mypageEvent();
      break;
    case '/mypageEdit':
      render(mypageEdit.mypageEditHtml);
      mypageEdit.mypageEditEvent();
      break;
    case 'upload':
      // upload
      break;
    default:
      alert('잘못된 페이지입니다.');
  }
};

// window.addEventListener('DOMContentLoaded', e => {
//   // const path = window.location
// });
switchDependsOnUrl();

// url 변경감지
window.addEventListener('changestate', e => {
  console.log(e);
  switchDependsOnUrl();
});
<<<<<<< HEAD

window.addEventListener('', () => {
  localStorage.setItem('path', window.location.pathname);
  window.history.pushState({ data: 'post' }, '', localStorage.getItem('path'));
  localStorage.removeItem('path');
});

window.addEventListener('unload', () => {
  localStorage.setItem('path', window.location.pathname);
});
=======
>>>>>>> b67b8e5eb2d1175389417c3c6338b52805d2c4a8
