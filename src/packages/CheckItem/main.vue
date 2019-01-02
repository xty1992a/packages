<template>
  <div class="ui-check-item" :class="cls" @click="checkMe">
    <slot>{{label}}</slot>
  </div>
</template>

<script>
  const getParent = (node, name) => {
	let parent = node.$parent;
	while (parent) {
	  if (parent.$options.name === name) {
		return parent
	  }
	  parent = parent.$parent;
	}
  };
  export default {
	name: 'check-item',
	components: {},
	props: {
	  label: {
		type: String,
	  },
	  disabled: Boolean,
	  value: {
		type: [String, Boolean],
		default: 'title',
	  },
	},
	created() {
	  let parentName = `${this.$package.prefixName}-check-group`;
	  this.parent = getParent(this, parentName)
	},
	methods: {
	  checkMe() {
		if (!this.usable) return;
		if (this.single) {
		  this.$emit('input', !this.value)
		}
		else {
		  this.parent.checkSomeOne(this.value)
		}
	  },
	},
	computed: {
	  usable() {
		if (this.single) {
		  return !this.disabled
		}
		return !this.parent.disabled
	  },
	  single() {
		return !Boolean(this.parent)
	  },
	  groupValue() {
		if (this.single) return this.value;
		return this.parent.value
	  },
	  isCheck() {
		if (this.single) {
		  return Boolean(this.value)
		}
		else {
		  if (Array.isArray(this.groupValue)) {
			return this.groupValue.findIndex(v => this.parent.isSame(v, this.value)) !== -1;
		  }
		  else {
			return this.parent.isSame(this.groupValue, this.value)
		  }
		}
	  },
	  cls() {
		return (this.isCheck ? 'ui-check-item__active' : '') + (this.usable ? '' : ' ui-check-item__disabled ')
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">
  .ui-check-item {
    position: relative;
    padding: 5px 10px 5px 20px;
    min-height: 1em;
    cursor: pointer;

    &:before {
      content: '';
      transition: .3s;
      position: absolute;
      transform: translateY(-50%);
      left: 0;
      top: 50%;
      width: 16px;
      height: 16px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      border-radius: 50%;
    }

    &.ui-check-item__active {
      &:before {
        background-color: #fff;
        border: 4px solid #3BB1FC;
      }
    }

    &.ui-check-item__disabled {
      &.ui-check-item__active {
        &:before {
          background-color: #fff;
          border: 4px solid #ccc;
        }
      }

      &:before {
        border: 1px solid #ccc;
        background-color: #f0f0f0;
      }
    }
  }
</style>
