import Main from './Main.vue'

Main.install = function (Vue) {
  Vue.component(Main.name, Main);
};
export default Main