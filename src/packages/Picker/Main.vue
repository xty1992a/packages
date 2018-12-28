<template>
  <div class="ui-picker">
    <template v-for="(options, index) in columns">
      <column :options="options" :value="value[index]" :is-same="isSame" mask @input="pickItem(index, ...arguments)" :key="'column'+index"/>
    </template>
  </div>
</template>

<script>
  import Column from './Column'

  export default {
	name: 'picker',
	components: {Column},
	props: {
	  columns: {
		type: Array,
		required: true,
		// 结构必须是二维数组,且每一项须有value, label属性
		validator: v => v.every(column => Array.isArray(column) && column.every(it => it.hasOwnProperty('value') && it.hasOwnProperty('label'))),
	  },
	  value: {
		type: Array,
		required: true,
	  },
	  isSame: {
		type: Function,
		default: (a, b) => a === b,
	  },
	  mask: Boolean,
	},
	methods: {
	  pickItem(index, val) {
		let value = [...this.value]
		value[index] = val
		this.$emit('input', value)
	  },
	},
	computed: {},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .ui-picker {
    display: flex;
    height: 180px;

    .picker-column {
      flex: 1;
    }
  }
</style>
