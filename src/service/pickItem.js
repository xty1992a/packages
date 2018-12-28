import Vue from 'vue'
import Picker from '../packages/Picker'
import Action from '../packages/Action'
import '../styles/pickItem.less'

const PickerAction = Vue.component('PickerAction', {
  components: {Action, Picker},
  data() {
	return {
	  columns: [],
	  value: [],
	  title: '',
	  isSame: (a, b) => a === b,
	  visibility: false,
	  mounted: false,
	}
  },
  mounted() {
	setTimeout(() => {
	  this.mounted = true
	}, 20)
  },
  methods: {
	pickItem(value) {
	  this.value = value
	  if (this.getColumns) {
		this.columns = this.getColumns(value)
	  }
	},
	cancel() {
	  this.promise && this.promise.reject()
	  this.close()
	},
	confirm() {
	  this.promise && this.promise.resolve(this.value)
	  this.close()
	},

	close() {
	  this.visibility = false
	  setTimeout(() => {
		this.$destroy(true)
	  }, 320)
	},
  },
  destroyed() {
	this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
  },
  watch: {
	visibility(now) {
	  if (!now) {
		this.close()
	  }
	},
  },
  template: `
  <action :show.sync="visibility">
  <div class="picker-action">
	<header>
		<button @click="cancel">取消</button>
			<span>{{title}}</span>
		<button @click="confirm">确定</button>
  	</header>
  	<section>
  		<picker v-if="mounted" :columns="columns" :value="value" mask @input="pickItem"/>
  	</section>
  </div>
</action>
  `,
})

const MainInstance = Vue.extend(PickerAction)
const dftOption = {
  value: [],
  columns: [],
  isSame: (a, b) => a === b,
}

export default opt => new Promise((resolve, reject) => {
  if (opt.getColumns) {
	opt.columns = opt.getColumns(opt.value)
  }
  let data = {...dftOption, ...opt, promise: {resolve, reject}}
  let instance = new MainInstance({data})
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visibility = true
})
