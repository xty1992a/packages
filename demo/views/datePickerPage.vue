<template>
  <div class="date-picker-page">
    <h3 class="title">函数式调用</h3>
    <section>
      <div class="panel" @click="getDate">
        <span class="label">生日</span>
        <span class="value">{{date}}</span>
      </div>
    </section>
    <h3 class="title">限制日期</h3>
    <section>
      <div class="panel" @click="getDateLimit">
        <span class="label">工作日</span>
        <span class="value">{{date1}}</span>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
	name: 'date-picker-demo',
	components: {},
	data() {
	  return {
		date: '',
		date1: '',
	  }
	},
	mounted() {
	},
	methods: {
	  getDate() {
		this.$service.getDateByPicker({
		  value: this.date,
		})
			.then(date => {
			  this.date = date.format('YYYY-MM-DD')
			})
			.catch(() => console.log('取消'))
	  },
	  getDateLimit() {
		this.$service.getDateByPicker({
		  value: this.date1,
		  check: d => [1, 2, 3, 4, 5].includes(d.day())
		})
			.then(date => {
			  this.date1 = date.format('YYYY-MM-DD')
			})
			.catch(() => console.log('取消'))
	  },
	},
	computed: {},
	watch: {},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .date-picker-page {
    padding: 10px;

    .panel {
      padding: 10px;
      .value {
        float: right;
      }
    }

  }
</style>
