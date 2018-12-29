<template>
  <div class="common-header">
    <span @click="$router.back()" style="float:left;" v-show="routeDeep">返回</span>
    <span>{{title}}</span>
  </div>
</template>

<script>
  export default {
	name: 'common-header',
	components: {},
	data() {
	  return {}
	},
	created() {
	},
	methods: {},
	computed: {
	  title() {
		return this.$route.meta.title
	  },
	  routeDeep() {
		return this.$route.path.split('/').filter(Boolean).length
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../styles/variable";

  .common-header {
    .shadow;
    padding: 10px;
    text-align: center;
    position: fixed;
    z-index: 1;
    right: 0;
    top: 0;
    left: 0;
  }
</style>
