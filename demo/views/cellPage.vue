<template>
  <div class="cell-demo">
    <h3 class="title">基础用法</h3>
    <section>
      <ui-cell title="标题" value="内容"/>
      <ui-cell title="标题" :border="false" value="内容"/>
    </section>
    <h3 class="title">带图标</h3>
    <section>
      <ui-cell title="标题" icon="search" value="内容"/>
      <ui-cell title="标题" :border="false" value="内容" clickable/>
    </section>
    <h3 class="title">插槽</h3>
    <section>
      <ui-cell title="标题">
        <ui-button size="small" slot="value" type="primary">按钮</ui-button>
      </ui-cell>
      <ui-cell title="value" @click="right=!right">
        <ui-icon slot="right-icon" icon="arrow-right" :style="rightIcon"/>
      </ui-cell>
    </section>
  </div>
</template>

<script>
  export default {
	name: 'cell-demo',
	components: {},
	data() {
	  return {
		right: false,
	  }
	},
	created() {
	},
	methods: {},
	computed: {
	  rightIcon() {
		return {
		  transform: this.right ? 'rotate(90deg)' : 'rotate(-90deg)',
		  marginTop: '5px',
		  transition: '.3s',
		}
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../styles/variable";

  .cell-demo {
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
