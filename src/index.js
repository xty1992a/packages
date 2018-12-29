import Loop from './packages/Loop/index'
import Picker from './packages/Picker'
import Message from './packages/Message'
import Infinite from './packages/Infinite'
import InputNumber from './packages/InputNumber'
import Action from './packages/Action'
import Button from './packages/Button'
import pickItem from './service/pickItem'
import getDateByPicker from './packages/DatePicker'

const packages = {
  Loop,
  Picker,
  Infinite,
  Action,
  Button,
  InputNumber,
};

const service = {
  pickItem,
  getDateByPicker,
};

const defaultOption = {
  prefixName: 'ui',
};
const install = (Vue, opt = {}) => {
  opt = {...defaultOption, ...opt};
  Object.keys(packages)
	  .forEach(key => {
		let component = packages[key];
		console.log(key)
		Vue.component(`${opt.prefixName}-${component.name}`, component);
	  });
  Vue.prototype.$message = Message
  Vue.prototype.$service = service
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...packages,
  service,
}
