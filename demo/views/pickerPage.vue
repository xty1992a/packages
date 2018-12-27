<template>
  <div class="picker-demo">
    <h3 class="title">基础用法</h3>
    <section>
      <ui-picker mask v-model="state" :options="stateList"/>
    </section>

    <h3 class="title">函数式调用</h3>
    <section>
      <p class="panel" @click="pickState">
        <span>国家</span>
        <span style="float: right;">{{stateText}}</span>
      </p>
    </section>

  </div>
</template>

<script>
  export default {
	name: 'picker-demo',
	components: {},
	data() {
	  return {
		state: 'usa',
		stateList: [
		  {label: '美国', value: 'usa'},
		  {label: '中国', value: 'China'},
		  {label: '法国', value: 'France'},
		  {label: '俄国', value: 'Russia'},
		  {label: '日本', value: 'Japan'},
		],
	  }
	},
	methods: {
	  pickState() {
		this.$service.pickItem({
		  value: this.state,
		  options: this.stateList,
		})
			.then(res => {
			  this.state = res
			})
			.catch(console.log)
	  },
	},
	computed: {
	  stateText() {
		let state = this.stateList.find(it => it.value === this.state);
		return state.label;
	  },
	},
	watch: {
	  state() {
		this.$message(`您选择了${this.stateText}`);
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../styles/variable";

  .picker-demo {
    padding: 10px;

    section {
      .shadow;
      margin-bottom: 10px;
    }

    p {
      padding: 10px;
    }

  }
</style>
