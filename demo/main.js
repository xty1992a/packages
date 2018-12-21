import Vue from 'vue'
import App from './App'
import Main from '../src/index'
import router from './router'
import './styles/reset.css'
import './styles/index.less'

Vue.config.productionTip = false
Vue.use(Main);

new Vue({
  router,
  el: '#app',
  components: {App},
  template: `<App/>`,
});
