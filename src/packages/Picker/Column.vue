<template>
  <div class="picker-column"
       @touchstart.stop="onTouchStart"
       @touchmove.stop.prevent="onTouchMove"
       @touchend.stop="onTouchEnd"
  >
    <ul class="options" :style="listStyle">
      <li class="item"
          v-for="item in options"
          :key="item.value"
          :class="isSame(item.value, value)?'checked':''"
          @click="confirm(item.value)">
        <span>{{item.label}}</span>
      </li>
    </ul>

    <template v-if="mask">
      <div class="picker-mask up" :style="maskStyle"></div>
      <div class="picker-mask down" :style="maskStyle"></div>
    </template>
  </div>
</template>

<script>
  export default {
	name: 'picker-column',
	props: {
	  options: {
		type: Array,
		required: true,
		validator: v => v.every(it => it.hasOwnProperty('value') && it.hasOwnProperty('label')),
	  },
	  value: null,
	  isSame: {
		type: Function,
		default: (a, b) => a === b,
	  },
	  mask: Boolean,
	},
	data() {
	  return {
		wrapRect: {
		  height: 300,
		},
		itemRect: {
		  height: 45,
		},
		deltaY: 0,
	  }
	},
	mounted() {
	  this.getItemStyle()
	},
	methods: {
	  getItemStyle() {
		let el = this.$el
		this.wrapRect.height = el.clientHeight
		let wrap = el.children[0]
		let item = wrap.children[0]
		if (item) {
		  this.itemRect.height = item.clientHeight
		}
	  },
	  confirm(value) {
		this.$emit('input', value)
	  },

	  onTouchStart(e) {
		let point = e.touches ? e.touches[0] : e
		this.startY = point.pageY
	  },
	  onTouchMove(e) {
		let point = e.touches ? e.touches[0] : e
		this.deltaY = point.pageY - this.startY
		let index = Math.round((this.offset + this.halfHeight) / this.itemRect.height)
		this.scrollIndex = Math.max(0, Math.min(this.options.length - 1, index))
	  },
	  onTouchEnd(e) {
		this.deltaY = 0
		this.$emit('input', this.options[this.scrollIndex].value)
	  },
	},
	computed: {
	  valueIndex() {
		return this.options.findIndex(it => this.isSame(it.value, this.value))
	  },
	  halfHeight() {
		return this.wrapRect.height / 2 - this.itemRect.height / 2
	  },
	  offset() {
		let offset = this.valueIndex * this.itemRect.height
		offset -= this.halfHeight
		offset -= this.deltaY
		return offset
	  },
	  listStyle() {
		return {
		  transform: `translate3d(0,${-this.offset}px,0)`,
		}
	  },
	  maskStyle() {
		return {
		  height: this.halfHeight + 'px',
		}
	  },
	},
	watch: {
	  options: {
		handler(now) {
		  if (this.valueIndex < 0 && now.length) {
			this.$emit('input', now[0].value)
		  }
		}, deep: true,
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">
  .picker-column {
    overflow: hidden;
    position: relative;
    height: 100%;

    .options {
      .item {
        text-align: center;
        padding: 8px 10px;
      }
    }

    .picker-mask {
      position: absolute;
      right: 0;
      left: 0;

      &.up {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        background-image: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0));
        top: 0;
      }

      &.down {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        background-image: linear-gradient(to top, #fff, rgba(255, 255, 255, 0));
        bottom: 0;
      }
    }
  }

</style>
