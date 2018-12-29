<template>
  <div class="input-number-demo">
    <h3 class="title">基础用法</h3>
    <section>
      <ui-input-number v-model="count"/>
    </section>
    <h3 class="title">限制区间</h3>
    <section>
      <ui-input-number v-model="count1" :min="-10" :max="10"/>
    </section>
    <h3 class="title">禁用</h3>
    <section>
      <ui-input-number v-model="count2" disabled/>
    </section>
  </div>
</template>

<script>
  export default {
	name: 'input-number-demo',
	components: {},
	data() {
	  return {
		count: 0,
		count1: 0,
		count2: 0,
	  }
	},
	created() {
	},
	methods: {},
	computed: {},
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../styles/variable";

  .input-number-demo {
    padding: 10px;

    section {
      .shadow;
      padding: 10px;
    }

    p {
      padding: 10px;
    }
  }
</style>
