// import createHeaderNode from './js/header';
import Main from './main';

// import detailUrlEvents from './js/detail';
import Signin from './signin';
// import signup from './js/signup';
// import develog from './js/develog';
// import mypage from './js/mypage';
// import mypageEdit from './js/mypageEdit';
// import search from './js/search';
// import writeUrlEvents from './js/write';
// import { reduceRight } from '../../backend/data/posts';

const routes = [
  // { path: '/', component: render(mainNode) },
  { path: '/', component: Main },
  // { path: '/search', component: Search },
  // { path: '/develog', component: Develog },
  // { path: '/detail', component: Detail },
  { path: '/signin', component: Signin },
  // { path: '/signup', component: Signup },
  // { path: '/mypage', component: Mypage },
  // { path: '/mypageEdit', component: MypageEdit },
  // { path: '/write', component: Write },
  // { path: '**', component: NotFound },
];

const router = () => {
  const path = window.location.pathname.split('/');
  const targetPath = '/' + path[1];

  return [, ...routes.find(route => route.path === targetPath).component()];
};

export default router;
