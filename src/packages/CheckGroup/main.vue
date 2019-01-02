<template>
  <div class="check-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
	name: 'check-group',
	components: {},
	props: {
	  value: {
		required: true,
	  },
	  radio: Boolean,
	  disabled: Boolean,
	  isSame: {
		type: Function,
		default: (a, b) => a === b,
	  },
	},
	methods: {
	  checkSomeOne(val) {
		if (this.disabled) return;
		if (this.radio) {
		  this.$emit('input', val)
		}
		else {
		  if (!Array.isArray(this.value)) return;
		  let list = [...this.value];
		  let index = list.findIndex(v => this.isSame(v, val));
		  if (index === -1) {
			list = [...list, val]
		  }
		  else {
			list.splice(index, 1)
		  }
		  this.$emit('input', list)
		}
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">
  .check-group {
    padding: 10px;
  }
</style>
