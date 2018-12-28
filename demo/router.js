import Vue from 'vue'
import Router from 'vue-router'
import LoopPage from './views/LoopPage'
import PickerPage from './views/PickerPage'
import infinitePage from './views/infinitePage'
import actionPage from './views/actionPage'
import DatePickerPage from './views/datePickerPage'
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
	  path: '/infinite',
	  name: 'infinite',
	  component: infinitePage,
	  meta: {
		title: 'infinite组件',
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
	{
	  path: '/datePicker',
	  name: 'datePickerPage',
	  component: DatePickerPage,
	  meta: {
		title: 'DatePickerPage组件',
	  },
	},
	{
	  path: '/action',
	  name: 'action',
	  component: actionPage,
	  meta: {
		title: 'Action组件',
	  },
	},
  ],
});
