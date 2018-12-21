<template>
  <transition name="msg">
    <div class="ui-message" v-show="show">
      <div class="ui-message__body">
        <h3 class="ui-message__title" v-show="title">{{title}}</h3>
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
		title: '',
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
		this.show = false
		setTimeout(() => {
		  this.$destroy(true);
		  this.$el.parentNode.removeChild(this.$el);
		}, 300)
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .ui-message {
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: none;
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;

    .ui-message__body {
      background-color: rgba(0, 0, 0, .7);
      padding: 12px 10px;
      border-radius: 4px;
      text-align: center;
      max-width: 50%;
      font-size: 15px;
      color: #fff;
    }

    .iconfont {
      font-size: 52px;
    }

    .ui-message__title {
      margin-top: -8px;
      font-size: 17px;
      line-height: 2;
    }

    .ui-message__text {
      min-width: 50px;
      line-height: 1.6;
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
