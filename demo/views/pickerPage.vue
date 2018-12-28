<template>
  <div class="picker-demo">
    <h3 class="title">基础用法</h3>
    <section>
      <ui-picker mask v-model="state" :columns="stateList"/>
    </section>

    <h3 class="title">多列</h3>
    <section>
      <ui-picker mask v-model="pickedRegion" :columns="region"/>
    </section>

    <h3 class="title">函数式调用</h3>
    <section>
      <p class="panel" @click="pickState">
        <span>地区</span>
        <span style="float: right;">{{pickedRegion.join(',')}}</span>
      </p>
    </section>

  </div>
</template>

<script>
  const cities = {
	'浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
	'福建': ['福州', '厦门', '莆田', '三明', '泉州'],
  };
  const getRegion = (province) => {
	let c1 = Object.keys(cities).map(c => ({value: c, label: c}))
	let c2 = cities[province].map(c => ({value: c, label: c}))
	return [c1, c2]
  };

  export default {
	name: 'picker-demo',
	components: {},
	data() {
	  return {
		pickedRegion: ['浙江', '杭州'],
		state: ['usa'],

		stateList: [
		  [
			{label: '美国', value: 'usa'},
			{label: '中国', value: 'China'},
			{label: '法国', value: 'France'},
			{label: '俄国', value: 'Russia'},
			{label: '日本', value: 'Japan'},
		  ],
		],
	  }
	},
	methods: {
	  pickState() {
		this.$service.pickItem({
		  value: this.pickedRegion,
		  getColumns: (value) => getRegion(value[0]),
		})
			.then(res => {
			  this.pickedRegion = res
			})
			.catch(console.log)
	  },
	},
	computed: {
	  stateText() {
		let labels = this.state.map((val, index) => this.stateList[index].find(s => s.value === val).label)
		return labels.join(',');
	  },
	  region() {
		let [province, city] = this.pickedRegion
		return getRegion(province)
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
