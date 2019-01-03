<template>
  <div class="ui-collapse">
    <slot></slot>
  </div>
</template>
<script>
  export default {
	name: 'collapse',
	components: {},
	props: {
	  value: {
		type: [Array],
	  },
	  radio: Boolean,
	},
	data() {
	  return {}
	},
	methods: {
	  pickItem(value) {
		if (this.radio) {
		  if (this.value.includes(value)) {
			this.$emit('input', [])
		  }
		  else {
			this.$emit('input', [value])
		  }
		}
		else {
		  if (this.value.includes(value)) {
			this.$emit('input', this.value.filter(v => v !== value))
		  }
		  else {
			this.$emit('input', [...this.value, value])
		  }
		}
	  },
	},
	computed: {},
  }
</script>

<style lang="less" rel="stylesheet/less">
</style>
