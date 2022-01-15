import index from './js/index';

import detailUrlEvents from './js/detail';

import signin from './js/signin';
import signup from './js/signup';
import mypage from './js/mypage';
import mypageEdit from './js/mypageEdit';
import header from './js/header';
import writeUrlEvents from './js/write';

const history = require('history-events');

const $root = document.querySelector('.root');

const render = html => {
  $root.innerHTML = html;
};

const switchDependsOnUrl = () => {
  const url = window.location.pathname.split('/');
  const pageCase = url[1] === '' ? '/' : `/${url[1]}`;
  console.log(pageCase);
  switch (pageCase) {
    case '/':
      render(index.indexHtml);
      index.indexEvent();
      break;
    case '/detail':
      detailUrlEvents();
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
    case '/write':
      writeUrlEvents();
      break;
    default:
      // 404page 뿌려주기
      alert('잘못된 페이지입니다.');
      window.history.pushState('404 error', '', '/');
  }
};

switchDependsOnUrl();

// url 변경감지
window.addEventListener('changestate', () => {
  switchDependsOnUrl();
});
