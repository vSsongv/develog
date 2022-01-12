import index from './js/index';
// import signin from './js/signin.js';
// import './js/signup';
// import './js/develog';
// import './js/detail';
// import './js/uploadPost';
// import './js/mypage';
// import './js/mypageEdit';

const $root = document.querySelector('.root');
const currentPage = window.location.pathname;
const origin = 'localhost:9000';

switch (currentPage) {
  case '/signin':
    // Signin
    // rendering -> dom 생성

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
    // Main
    // $root.innerHTML = index.str;
    index.foo();
}

const url = location.origin + '/';
