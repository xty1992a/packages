<template>
  <div class="button-demo">
    <h3 class="title">基础用法</h3>
    <section>
      <ui-button type="default" @click="onClick">默认按钮</ui-button>
      <ui-button type="primary">主要按钮</ui-button>
      <ui-button type="success">成功按钮</ui-button>
      <ui-button type="waring">警告按钮</ui-button>
      <ui-button type="danger">危险按钮</ui-button>
    </section>
    <h3 class="title">朴素按钮</h3>
    <section>
      <ui-button plain type="default">默认按钮</ui-button>
      <ui-button plain type="primary">主要按钮</ui-button>
      <ui-button plain type="success">成功按钮</ui-button>
      <ui-button plain type="waring">警告按钮</ui-button>
      <ui-button plain type="danger">危险按钮</ui-button>
    </section>
    <h3 class="title">禁用按钮</h3>
    <section>
      <ui-button disabled type="default">默认按钮</ui-button>
      <ui-button disabled type="primary">主要按钮</ui-button>
      <ui-button disabled type="success">成功按钮</ui-button>
      <ui-button disabled type="waring">警告按钮</ui-button>
      <ui-button disabled type="danger">危险按钮</ui-button>
    </section>
    <h3 class="title">按钮尺寸</h3>
    <section>
      <ui-button size="large">大号按钮</ui-button>
      <ui-button size="normal">普通按钮</ui-button>
      <ui-button size="small">小号按钮</ui-button>
      <ui-button size="mini">迷你按钮</ui-button>
    </section>
    <h3 class="title">圆按钮</h3>
    <section>
      <ui-button round type="primary" size="large">大号按钮</ui-button>
      <ui-button round type="primary" size="normal">普通按钮</ui-button>
      <ui-button round type="primary" size="small">小号按钮</ui-button>
      <ui-button round type="primary" size="mini">迷你按钮</ui-button>
    </section>
  </div>
</template>

<script>
  export default {
	name: 'button-demo',
	components: {},
	data() {
	  return {}
	},
	created() {
	},
	methods: {
	  onClick() {
		this.$message({
		  message: '点击了普通按钮',
		  icon: 'success',
		  duration: 10000,
		})
	  },
	},
	computed: {},
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../styles/variable";

  .button-demo {
    padding: 10px;
    background-color: #f7f7f7;

    section {
      .shadow;
      padding: 10px;

      button {
        margin: 5px;
      }
    }

    p {
      padding: 10px;
    }
  }
</style>
