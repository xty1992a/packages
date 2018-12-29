import Vue from 'vue'
import Router from 'vue-router'
import LoopPage from './views/LoopPage'
import PickerPage from './views/PickerPage'
import infinitePage from './views/infinitePage'
import actionPage from './views/actionPage'
import InputNumberPage from './views/inputNumberPage'
import DatePickerPage from './views/datePickerPage'
import buttonPage from './views/buttonPage'
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
	  path: '/button',
	  name: 'button',
	  component: buttonPage,
	  meta: {
		title: 'Button组件',
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
		title: 'Infinite组件',
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
	{
	  path: '/inputNumber',
	  name: 'inputNumber',
	  component: InputNumberPage,
	  meta: {
		title: 'InputNumberPage组件',
	  },
	},
  ],
});
