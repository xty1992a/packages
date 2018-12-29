import Loop from './packages/Loop/index'
import Picker from './packages/Picker'
import Message from './packages/Message'
import Infinite from './packages/Infinite'
import InputNumber from './packages/InputNumber'
import Action from './packages/Action'
import pickItem from './service/pickItem'

const packages = {
  Loop,
  Picker,
  Infinite,
  Action,
  InputNumber,
};

const service = {
  pickItem,
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
