<template>
  <div class="loop" :style="wrapStyle">
    <div class="slider" :style="sliderStyle" ref="slider" @transitionend="transitionEnd">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
	name: 'loop',
	components: {},
	props: {
	  count: Number,
	},
	data() {
	  return {
		itemRect: {
		  height: 45,
		},
		index: 0,
		quick: false,
	  }
	},
	created() {
	},
	mounted() {
	  this.initElement();
	  this.getElementRect();
	},
	methods: {
	  initElement() {
		let slots = this.$slots.default;
		if (slots.length > this.count) {
		  console.log('should repeat');
		  this.repeatElement();
		  setTimeout(() => {
			this.autoPlay();
		  }, 1000)
		}
	  },

	  repeatElement() {
		let len = this.count;
		let slider = this.$refs.slider;
		while (len--) {
		  let index = this.count - len - 1;
		  slider.appendChild(slider.children[index].cloneNode(true));
		}
	  },

	  autoPlay() {
		clearInterval(this.timeID);
		this.timeID = setInterval(() => {
		  this.next();
		}, 1000)
	  },

	  transitionEnd() {
		if (this.index === this.$slots.default.length) {
		  this.index = 0;
		  this.quick = true;
		}
	  },

	  next() {
		this.index++;
	  },

	  getElementRect() {
		let el = this.$el;
		let slider = el.children[0];
		let item = slider.children[0];
		if (item) {
		  this.itemRect.height = item.clientHeight;
		}
	  },
	},
	computed: {
	  wrapStyle() {
		return {
		  height: this.count * this.itemRect.height + 'px',
		}
	  },
	  sliderStyle() {
		let len = this.$slots.default.length;
		let offset = this.index * this.itemRect.height;
		return {
		  height: len * this.itemRect.height + 'px',
		  transform: `translate3d(0,${-offset}px, 0)`,
		  transition: this.quick ? '' : '.3s',
		}
	  },
	},
	watch: {
	  quick(now) {
		if (now) {
		  setTimeout(() => {
			this.quick = false;
		  }, 280);
		}
	  },
	},
	beforeDestroy() {
	  clearInterval(this.timeID);
	},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .loop {
    overflow: hidden;
  }
</style>
