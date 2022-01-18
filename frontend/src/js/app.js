import Main from './main';
import Signin from './signin';
// import signup from './js/signup';
import Develog from './develog';
// import mypage from './js/mypage';
// import mypageEdit from './js/mypageEdit';
import Search from './search';
// import writeUrlEvents from './js/write';
// import { reduceRight } from '../../backend/data/posts';

const routes = [
  { path: '/', component: Main },
  { path: '/search', component: Search },
  { path: '/develog', component: Develog },
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
  return routes.find(route => route.path === targetPath).component();
};

export default router;
