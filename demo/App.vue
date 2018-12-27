<template>
  <div class="app">
    <CommonHeader/>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import CommonHeader from './components/CommonHeader'

  export default {
	name: 'app',
	components: {CommonHeader},
	computed: {
	  transitionName() {
		return this.$route.path === '/' ? 'right' : 'left'
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .app {
    background-color: #f7f7f7;
    font-size: 15px;
    height: 100%;
  }

  .left-enter, .right-leave-to {
    transform: translate3d(100%, 0, 0);
  }

  .right-enter, .left-leave-to {
    transform: translate3d(-100%, 0, 0);
  }

  .left-enter-active,
  .right-enter-active,
  .left-leave-active,
  .right-leave-active {
    position: absolute;
    width: 100%;
    transition: transform .3s;
  }
</style>
