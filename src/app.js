import index from './js/index';
import signin from './js/signin';
import signup from './js/signup';
import develog from './js/develog';
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
  if (/\/develog\/\d/.test(window.location.pathname)) {
    const userId = window.location.pathname.split('/')[2];
    render(develog.develogHtml);
    develog.develogEvent(userId);
  } else {
    const path = '/' + window.location.pathname.split('/')[1];
    switch (path) {
      case '/':
        render(index.indexHtml);
        index.indexEvent();
        break;
      case '/detail':
        console.log('switch');
        render(detail.detailHTML);
        detail.detailEvent();
        break;
      case '/develog':
        render(develog.detailHTML);
        develog.develogEvent();
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
      case 'upload':
        // upload
        break;

      default:
        alert('잘못된 페이지입니다.');
    }
  }
};

switchDependsOnUrl();

// url 변경감지
window.addEventListener('changestate', () => {
  switchDependsOnUrl();
});
