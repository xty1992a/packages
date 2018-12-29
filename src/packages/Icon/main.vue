<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
  export default {
	name: 'icon',
	props: {
	  icon: {
		type: String,
		required: true
	  },
	  className: {
		type: String
	  }
	},
	computed: {
	  iconName() {
		return `#icon-${this.icon}`
	  },
	  svgClass() {
		if (this.className) {
		  return 'ui-icon ' + this.className
		} else {
		  return 'ui-icon'
		}
	  }
	}
  }
</script>

<style scoped>
  .ui-icon {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }
</style>
