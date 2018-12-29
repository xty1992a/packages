<template>
  <div class="app">
    <CommonHeader/>
    <section class="view-container">
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </section>
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
  @import "./styles/index";

  .app {
    font-size: 15px;
    height: 100%;

    .view-container {
      background-color: #f7f7f7;
      padding-top: 40px;
      height: 100%;
    }
  }

  section {
    .shadow;
  }

  p {
    padding: 10px;
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
