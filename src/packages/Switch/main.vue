<template>
  <div class="ui-switch" :class="cls" :style="style" @click="toggle">
    <div class="ui-switch--inner"></div>
  </div>
</template>
<script>
  export default {
	name: 'switch',
	components: {},
	props: {
	  disabled: Boolean,
	  value: {
		type: Boolean,
	  },
	  size: {
		type: String,
		default: '30px',
	  },
	  activeColor: {
		type: String,
	  },
	  inactiveColor: {
		type: String,
	  },
	},
	data() {
	  return {}
	},
	methods: {
	  toggle() {
		if (this.disabled) return;
		this.$emit('input', !this.value)
	  },
	},
	computed: {
	  style() {
		return {
		  fontSize: this.size,
		  backgroundColor: this.value ? this.activeColor : this.inactiveColor,
		}
	  },
	  cls() {
		return (this.value ? 'ui-switch--on' : 'ui-switch--off') + (this.disabled ? ' ui-switch--disabled ' : '')
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .ui-switch {
    display: inline-block;
    position: relative;
    width: 2em;
    height: 1em;
    border: 1px solid #0000001a;
    border-radius: 1em;
    box-sizing: content-box;
    background-color: #fff;
    transition: background-color 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) inset;

    &.ui-switch--on {
      background-color: #1890ff;

      .ui-switch--inner {
        transform: translateX(1em);
      }
    }

    &.ui-switch--off {
      .ui-switch--inner {
      }
    }

    &.ui-switch--disabled {
      opacity: .4;

      .ui-switch--inner {
      }
    }

    .ui-switch--inner {
      top: 0;
      left: 0;
      position: absolute;
      border-radius: 100%;
      width: 1em;
      height: 1em;
      z-index: 1;
      -webkit-transition: 0.3s;
      transition: 0.3s;
      box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
      background-color: #fff;
    }
  }
</style>
