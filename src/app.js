import index from './js/index';
import signin from './js/signin';
import detail from './js/detail';

const history = require('history-events');

const $root = document.querySelector('.root');

const render = html => {
  $root.innerHTML = html;
};

render(index.indexHtml);
index.indexEvent();

const switchDependsOnUrl = () => {
  switch (window.location.pathname) {
    case '/':
      render(index.indexHtml);
      index.indexEvent();
      break;
    case '/detail':
      render(detail.detailHtml);
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

window.addEventListener('', () => {
  localStorage.setItem('path', window.location.pathname);
  window.history.pushState({ data: 'post' }, '', localStorage.getItem('path'));
  localStorage.removeItem('path');
});

window.addEventListener('unload', () => {
  localStorage.setItem('path', window.location.pathname);
});
