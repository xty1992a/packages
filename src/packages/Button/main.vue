<template>
  <button class="ui-button" :class="cls" :disabled="disabled" @click="clickHandler">
    <slot></slot>
  </button>
</template>
<script>
  export default {
	name: 'button',
	components: {},
	props: {
	  type: {
		type: String,
		default: 'default',
	  },
	  size: {
		type: String,
		default: 'normal',
	  },
	  plain: {
		type: Boolean,
	  },
	  round: {
		type: Boolean,
	  },
	  square: {
		type: Boolean,
	  },
	  disabled: {
		type: Boolean,
	  },
	},
	data() {
	  return {}
	},
	methods: {
	  clickHandler() {
		this.$emit('click', ...arguments)
	  },
	},
	computed: {
	  cls() {
		let cls = '';
		if (this.plain) {
		  cls += ' ui-button--plain ';
		}
		if (this.disabled) {
		  cls += ' ui-button--disabled ';
		}
		if (this.round) {
		  cls += ' ui-button--round ';
		}
		if (this.square) {
		  cls += ' ui-button--square ';
		}
		return cls + ` ui-button--${this.size} ui-button--${this.type}`
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../styles/button";
</style>
