import Main from './main'
import '../../font/iconfont.js'

Main.install = function (Vue) {
  Vue.component(Main.name, Main);
};
export default Main