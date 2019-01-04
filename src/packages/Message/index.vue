<template>
  <transition name="msg">
    <div class="ui-message" v-show="show">
      <div class="ui-message__body" :class="bodyCls">
        <i class="iconfont" :class="'icon-'+icon" v-show="icon"></i>
        <p class="ui-message__text">{{message}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
	name: 'message',
	data() {
	  return {
		show: false,
		type: 'default',
		message: '',
		duration: 1500,
		icon: '',
	  }
	},
	mounted() {
	  this.startInterval()
	},
	methods: {
	  startInterval() {
		this.timer = setTimeout(() => {
		  this.destroyElement()
		}, this.duration)
	  },
	  destroyElement() {
		this.show = false;
		setTimeout(() => {
		  this.$destroy(true);
		  this.$el.parentNode.removeChild(this.$el);
		}, 300)
	  },
	},
	computed: {
	  bodyCls() {
		if (this.icon) {
		  return 'ui-message--icon'
		}
		return 'ui-message--text'
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .ui-message {
    transform: translate3d(-50%, -50%, 0);
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 50%;

    .ui-message__body {
      background-color: rgba(0, 0, 0, .8);
      padding: 4px;
      border-radius: 4px;
      text-align: center;
      font-size: 15px;
      color: #fff;
    }

    .iconfont {
      margin-top: 5px;
      display: inline-block;
      font-size: 52px;
    }

    .ui-message__text {
      min-width: 100px;
      padding: 5px;
    }
  }

  .msg-enter, .msg-leave-to {
    .ui-message__body {
      opacity: 0;
      transform: translateY(-30px);
    }
  }

  .msg-enter-active, .msg-leave-active {
    transition: .2s linear;

    .ui-message__body {
      transition: .2s linear;
    }
  }
</style>
