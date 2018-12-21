<template>
  <div class="app">
    <CommonHeader/>
    <router-view/>
  </div>
</template>

<script>
  import CommonHeader from './components/CommonHeader'

  export default {
	name: 'app',
	components: {CommonHeader},
	data() {
	  return {}
	},
	created() {
	},
	methods: {},
	computed: {},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .app {
    background-color: #f7f7f7;
    font-size: 15px;
    height: 100%;
  }
</style>
