import Main from './main';
import Signin from './signin';
import Mypage from './mypage';
import MypageEdit from './mypageEdit';
import Signup from './signup';
import Develog from './develog';
import Search from './search';
import Detail from './detail';
import Write from './write';
// import writeUrlEvents from './js/write';
// import { reduceRight } from '../../backend/data/posts';

const routes = [{
    path: '/',
    component: Main,
  },
  {
    path: '/callback',
    component: Main,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/develog',
    component: Develog,
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/write',
    component: Write
  },
  {
    path: '/mypage',
    component: Mypage
  },
  {
    path: '/mypageEdit',
    component: MypageEdit
  },

  {
    path: '/signin',
    component: Signin,
  },
  {
    path: '/signup',
    component: Signup,
  },

  // { path: '**', component: NotFound },
];

const router = () => {
  const path = window.location.pathname.split('/');
  const targetPath = '/' + path[1];
  return routes.find(route => route.path === targetPath).component();
};

export default router;