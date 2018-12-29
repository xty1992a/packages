<template>
  <div class="month-picker">
    <picker :options="years" v-model="year"/>
    <picker :options="months" v-model="month"/>
  </div>
</template>

<script>
  import Picker from './Picker.vue'
  import dayjs from 'dayjs'
  const today = dayjs()
  export default {
	name: 'month-picker',
	components: {Picker},
	props: {
	  value: String
	},
	data () {
	  return {
		year: '',
		month: ''
	  }
	},
	created() {
	  let [year, month] = this.value.split('-')
	  this.year = +year
	  this.month = +month
	  console.log(year, month)
	},
	methods: {
	  confirm(value) {
		if (value !== this.value) {
		  this.$emit('input', value)
		}
	  }
	},
	computed: {
	  years() {
		let start = dayjs(new Date(1970, 0, 1))
		let before = today.diff(start, 'year')
		let len = before + 31
		let list = []
		while (len--) {
		  list.push({
			value: start.add(len, 'year').year(),
			label: start.add(len, 'year').year(),
		  })
		}
		return list.reverse()
	  },
	  months() {
		return [...Array(12)].map((n, i) => ({label: i + 1, value: i + 1}))
	  }
	},
	watch: {
	  year(now) {
		this.confirm(now + '-' + this.month)
	  },
	  month(now){
		this.confirm(this.year + '-' + now)
	  }
	}
  }
</script>

<style lang="less" rel="stylesheet/less">

  .month-picker {
    background-color: #fff;
    height: 296px;
    display: flex;
    .picker {
      flex: 1;
    }
  }
</style>
