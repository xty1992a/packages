/**
 * Created by TY-xie on 2018/10/26.
 */
import './iconfont.css'
import Vue from 'vue'
import Main from './index.vue'
const MessageConstructor = Vue.extend(Main)
let seed = 1
let instances = []
let instance
const Message = opt => {
  opt = opt || {}
  if (typeof opt === 'string') {
	opt = {
	  message: opt,
	}
  }
  let userOnClose = opt.onClose
  let id = 'message_' + seed++
  opt.onClose = function () {
	Message.close(id, userOnClose)
  }
  instance = new MessageConstructor({
	data: opt,
  })
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.show = true
  instances.push(instance)
  return instance.vm
}

Message.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
	if (id === instances[i].id) {
	  if (typeof userOnClose === 'function') {
		userOnClose(instances[i]);
	  }
	  instances.splice(i, 1);
	  break;
	}
  }
}
Message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
	instances[i].close();
  }
};
export default Message
