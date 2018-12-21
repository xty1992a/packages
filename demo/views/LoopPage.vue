<template>
  <div class="loop-demo">
    <h3 class="title">基础用法</h3>
    <section>
      <ui-loop :count="3">
        <p v-for="i in 5">item {{i}}</p>
      </ui-loop>
    </section>
  </div>
</template>

<script>
  export default {
	name: 'loop-demo',
	components: {},
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
  @import "../styles/variable";

  .loop-demo {
    padding: 10px;

    section {
      .shadow;
    }

    p {
      padding: 10px;
    }
  }
</style>
