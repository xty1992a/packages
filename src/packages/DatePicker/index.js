/**
 * Created by rule on 2018/12/15.
 */
import Vue from 'vue'
import Main from './src/Main.vue'

const MainConstructor = Vue.extend(Main)
const dftOption = {
  value: '',
  check: d => true
}

const getDateByPicker = opt => new Promise((resolve, reject) => {
  opt = {...dftOption, ...opt, promise: {resolve, reject}}
  let instance = new MainConstructor({data: opt})
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visibility = true
})

export default getDateByPicker