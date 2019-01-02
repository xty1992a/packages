import Loop from './packages/Loop/index'
import Picker from './packages/Picker'
import Message from './packages/Message'
import Infinite from './packages/Infinite'
import InputNumber from './packages/InputNumber'
import Action from './packages/Action'
import Cell from './packages/Cell'
import Button from './packages/Button'
import Search from './packages/Search'
import Switch from './packages/Switch'
import CheckGroup from './packages/CheckGroup'
import CheckItem from './packages/CheckItem'
import Icon from './packages/Icon'
import pickItem from './service/pickItem'
import getDateByPicker from './packages/DatePicker'
import './styles/index.less'

const packages = {
  Loop,
  Picker,
  Infinite,
  Action,
  Button,
  Search,
  CheckGroup,
  CheckItem,
  Switch,
  Cell,
  Icon,
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
  Vue.prototype.$package = {
	...opt,
  };
  Object.keys(packages)
	  .forEach(key => {
		let component = packages[key];
		component.name = `${opt.prefixName}-${component.name}`;
		Vue.component(component.name, component);
	  });
  Vue.prototype.$message = Message;
  Vue.prototype.$service = service;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...packages,
  service,
}
