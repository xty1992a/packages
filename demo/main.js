import Vue from 'vue'
import App from './App'

import Main from '../src'

import router from './router'
import './styles/reset.css'
import './styles/index.less'

Vue.config.productionTip = false;
Vue.use(Main);
window.vueRouter = router;

window.APP = new Vue({
  router,
  el: '#app',
  components: {App},
  template: `<App/>`,
});
