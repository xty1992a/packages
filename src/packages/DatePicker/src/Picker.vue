<template>
  <div class="picker" @touchstart="startHandle" @touchmove.prevent="moveHandle" @touchend="endHandle">
    <ul class="options" :style="listStyle">
      <li class="item"
          v-for="it in options">
        <span>{{it.label}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
	name: 'picker',
	components: {},
	props: {
	  value: null,
	  options: Array,
	  isSame: {
		type: Function,
		default: (a, b) => a === b
	  }
	},
	data () {
	  return {
		itemRect: {
		  height: 35
		},
		wrapRect: {
		  height: 35
		},
		deltaY: 0
	  }
	},
	mounted() {
	  setTimeout(() => {
		this.getItemStyle()
	  }, 20)
	},
	methods: {
	  getItemStyle() {
		let el = this.$el
		let list = el.children[0]
		let item = list.children[0]
		if (item) {
		  this.itemRect.height = item.clientHeight
		  this.wrapRect.height = el.clientHeight
		}
	  },
	  startHandle(e) {
		let point = e.touches ? e.touches[0] : e
		this.startY = point.pageY
	  },
	  moveHandle(e) {
		let point = e.touches ? e.touches[0] : e
		this.deltaY = point.pageY - this.startY
		let index = Math.round((this.offset + this.half) / this.itemRect.height)
		this.scrollIndex = Math.min(this.options.length - 1, Math.max(0, index))
	  },
	  endHandle(e) {
		this.deltaY = 0
		let item = this.options[this.scrollIndex]
//		console.log(this.scrollIndex, item)
		item && this.$emit('input', item.value)
	  },
	},
	computed: {
	  valueIndex() {
		return this.options.findIndex(it => this.isSame(this.value, it.value))
	  },
	  offset() {
		let offset = this.valueIndex * this.itemRect.height
		offset -= this.half
		offset -= this.deltaY
		return offset
	  },
	  half() {
		return this.wrapRect.height / 2 - this.itemRect.height / 2
	  },
	  listStyle() {
		return {
		  transform: `translateY(${-this.offset}px)`
		}
	  }
	}
  }
</script>

<style lang="less" rel="stylesheet/less">

  .picker {
    height: 100%;
    overflow: hidden;
    position: relative;
    &:before, &:after {
      content: '';
      position: absolute;
      right: 0;
      left: 0;
      height: ~'calc(50% - 17.5px)';
      touch-action: none;
    }
    &:before {
      z-index: 1;
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.6));
      top: 0;
    }
    &:after {
      background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.6));
      bottom: 0;
    }
    .options {
      .item {
        padding: 10px 0;
        font-size: 15px;
      }
    }
  }
</style>
