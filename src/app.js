import index from './js/index.js';
import signin from './js/signin';
import detail from './js/detail';

const history = require('history-events');
// import detailRender from './js/detail';
// import signinRender from './js/signin';
// import signin from './js/signin.js';
// import './js/signup';
// import './js/develog';
// import './js/detail';
// import './js/uploadPost';
// import './js/mypage';
// import './js/mypageEdit';

const $root = document.querySelector('.root');

const render = html => {
  $root.innerHTML = html;
};

render(index.indexHtml);
index.indexEvent();

const testswitch = () => {
  switch (window.location.pathname) {
    case '/':
      render(index.indexHtml);
      index.indexEvent();
      break;
    case '/detail':
      render(detail.detailHtml);
      break;
    case '/signin':
      render(signin.signinHtml);
      signin.signinEvent();
      break;
    case '/singUp':
      // SignUp
      break;
    case '/develog':
      // Develog
      break;
    case 'myPage':
      // myPage
      break;
    case 'myPageEdit':
      // myPageEdit
      break;
    case 'upload':
      // upload
      break;

    default:
      alert('잘못된 페이지입니다.');
  }
};

// url 변경감지
window.addEventListener('changestate', e => {
  testswitch();
});

// window.history.pushState({ data: 'signin' }, '', '/signin');

const origin = 'localhost:9000';
