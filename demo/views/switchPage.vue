<template>
  <div class="switch-demo">
    <h3 class="title">基础用法</h3>
    <section>
      <ui-cell title="记住设置">
        <ui-switch slot="value" v-model="open"/>
      </ui-cell>
    </section>
    <h3 class="title">禁用</h3>
    <section>
      <ui-cell title="记住设置">
        <ui-switch slot="value" disabled v-model="open1"/>
      </ui-cell>
    </section>
    <h3 class="title">自定义颜色</h3>
    <section>
      <ui-cell title="记住设置">
        <ui-switch slot="value" v-model="open2" active-color="#0f0" inactive-color="#f00"/>
      </ui-cell>
    </section>
  </div>
</template>

<script>
  export default {
	name: 'switch-demo',
	components: {},
	data() {
	  return {
		open: false,
		open1: true,
		open2: false,
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

  .switch-demo {
    padding: 10px;
    background-color: #f7f7f7;

    section {
      .shadow;
    }

    p {
      padding: 10px;
    }
  }
</style>
