import Home from '../components/home';
import Login from '../components/login';

export default [{
    title: '首页',
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
    // routes: [{
    //   title: '测试',
    //   path: '/test',
    //   component: Login,
    //   exact: true,
    // }, ]
  },
  {
    title: '登录',
    path: '/login',
    component: Login,
    exact: true,
  },
]