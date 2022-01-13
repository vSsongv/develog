import index from './js/index';
import signin from './js/signin';
import detail from './js/detail';

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
      render(detail.detailHTML);
      detail.detailEvent();
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

switchDependsOnUrl();

// url 변경감지
window.addEventListener('changestate', e => {
  switchDependsOnUrl();
});

const origin = 'localhost:9000';
