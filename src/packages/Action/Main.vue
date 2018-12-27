<template>
  <transition :name="position">
    <div class="ui-action" v-show="show" :style="actionStyle">
      <div class="action-modal" key="modal" @click="cancel"></div>
      <div class="action-body" :class="`action-${position} ${bodyClass}`" :style="bodyStyle" key="body">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
	name: 'action',
	components: {},
	props: {
	  show: Boolean,
	  mountTo: { // action挂载位置
		type: [Element, String, Function],
		default: () => document.body,
	  },
	  position: {
		mount: {},
		type: String,
		default: 'bottom',
		validator: v => ['top', 'center', 'bottom'].includes(v),
	  },
	  height: {
		type: [Number, String],
		default: '50%',
	  },
	  width: {
		type: [Number, String],
		default: '100%',
	  },
	  bodyClass: {
		type: String,
		default: '',
	  },
	},
	data() {
	  return {}
	},
	created() {
	},
	mounted() {
	  let container = this.mountTo || this.$parent.$el
	  if (typeof this.mountTo === 'string') {
		container = document.querySelector(this.mountTo)
	  }
	  if (this.mountTo instanceof Function) {
		container = this.mountTo()
	  }
	  if (container !== document.body) {
		if (getComputedStyle(container)['position'] === 'static') {
		  container.style.position = 'relative'
		}
		container.style.overflow = 'hidden'
	  }
	  container.appendChild(this.$el)
	},
	methods: {
	  cancel() {
		this.$emit('update:show', false)
	  },
	},
	computed: {
	  bodyStyle() {
		let height = this.height
		let width = this.width
		if (!width && !height) return null

		if (typeof height === 'number') {
		  height += 'px'
		}
		if (typeof width === 'number') {
		  width += 'px'
		}
		return {
		  height, width,
		}
	  },
	  actionStyle() {
		if (this.mountTo === document.body) {
		  return {
			position: 'fixed',
		  }
		}
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .ui-action {
    z-index: 30;
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;

    .action-modal {
      opacity: .4;
      background-color: #000;
      position: absolute;
      bottom: 0;
      right: 0;
      top: 0;
      left: 0;
    }

    .action-body {
      background-color: #fff;
    }

    .action-bottom {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
    }

    .action-top {
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
    }

    .action-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }

  .bottom-enter, .bottom-leave-to {
    .action-modal {
      opacity: 0;
    }

    .action-body {
      transform: translate3d(0, 100%, 0);
    }
  }

  .top-enter, .top-leave-to {
    .action-modal {
      opacity: 0;
    }

    .action-body {
      transform: translate3d(0, -100%, 0);
    }
  }

  .center-enter, .center-leave-to {
    .action-modal {
      opacity: 0;
    }

    .action-body {
      transform: translate3d(-50%, -60%, 0);
    }
  }

  .bottom-enter-active, .bottom-leave-active,
  .center-enter-active, .center-leave-active,
  .top-enter-active, .top-leave-active {
    transition: .30s;

    .action-modal, .action-body {
      transition: .30s;
    }
  }
</style>
