import App from '../App';
import Home from '../containers/home';
import Login from '../containers/login';

export default [{
  path: '/',
  component: App,
  loadData: App.loadData,
  routes: [{
      path: '/',
      component: Home,
      exact: true,
      loadData: Home.loadData,
    },
    {
      path: '/login',
      component: Login,
      exact: true,
    },
  ]
}]