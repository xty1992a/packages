import Vue from 'vue'
import Router from 'vue-router'
import LoopPage from './views/LoopPage'
import PickerPage from './views/PickerPage'
import Home from './views/Home'

Vue.use(Router);

export default new Router({
  routes: [
	{
	  path: '/',
	  name: 'home',
	  component: Home,
	  meta: {
		title: '首页',
	  },
	},
	{
	  path: '/loop',
	  name: 'loop',
	  component: LoopPage,
	  meta: {
		title: 'Loop组件',
	  },
	},
	{
	  path: '/picker',
	  name: 'picker',
	  component: PickerPage,
	  meta: {
		title: 'Picker组件',
	  },
	},
  ],
});
