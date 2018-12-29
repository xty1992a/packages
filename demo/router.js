import Vue from 'vue'
import Router from 'vue-router'
import LoopPage from './views/LoopPage'
import PickerPage from './views/PickerPage'
import infinitePage from './views/infinitePage'
import actionPage from './views/actionPage'
import InputNumberPage from './views/inputNumberPage'
import DatePickerPage from './views/datePickerPage'
import buttonPage from './views/buttonPage'
import MessagePage from './views/messagePage'
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
		title: 'Button 按钮',
	  },
	},
	{
	  path: '/Message',
	  name: 'message',
	  component: MessagePage,
	  meta: {
		title: 'Message 提示',
	  },
	},
	{
	  path: '/loop',
	  name: 'loop',
	  component: LoopPage,
	  meta: {
		title: 'Loop 抽奖轮播',
	  },
	},
	{
	  path: '/infinite',
	  name: 'infinite',
	  component: infinitePage,
	  meta: {
		title: 'Infinite 上拉加载',
	  },
	},
	{
	  path: '/picker',
	  name: 'picker',
	  component: PickerPage,
	  meta: {
		title: 'Picker 选择器',
	  },
	},
	{
	  path: '/datePicker',
	  name: 'datePickerPage',
	  component: DatePickerPage,
	  meta: {
		title: 'DatePicker 日期选择器',
	  },
	},
	{
	  path: '/action',
	  name: 'action',
	  component: actionPage,
	  meta: {
		title: 'Action 抽屉',
	  },
	},
	{
	  path: '/inputNumber',
	  name: 'inputNumber',
	  component: InputNumberPage,
	  meta: {
		title: 'InputNumber 步进器',
	  },
	},
  ],
});
