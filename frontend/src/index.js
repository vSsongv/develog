import index from './js/main';

import detailUrlEvents from './js/detail';

import signin from './js/signin';
import signup from './js/signup';
import develog from './js/develog';
import mypage from './js/mypage';
import mypageEdit from './js/mypageEdit';
import header from './js/header';
import search from './js/search';
import writeUrlEvents from './js/write';

const history = require('history-events');

const $root = document.getElementById('root');

const render = html => {
  $root.innerHTML = html;
};

const switchDependsOnUrl = () => {
  const path = window.location.pathname.split('/');
  console.log(path);

  if (/\/develog\/\d/.test(window.location.pathname)) {
    const userId = path[2];
    render(develog.develogHtml);
    develog.develogEvent(userId);
  } else if (/\/search\/*/.test(window.location.pathname)) {
    const searchTitle = decodeURIComponent(path[2]);
    render(search.searchHtml);
    search.searchEvent(searchTitle);
  } else {
    const targetPath = '/' + path[1];
    switch (targetPath) {
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
  }
};

switchDependsOnUrl();

// url 변경감지
window.addEventListener('changestate', () => {
  switchDependsOnUrl();
});
