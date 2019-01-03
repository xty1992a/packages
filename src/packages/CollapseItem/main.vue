<template>
  <div class="ui-collapse-item">
    <ui-cell :title="title" @click="toggle">
      <ui-icon slot="value" icon="arrow-right" :style="rightIcon"/>
    </ui-cell>
    <transition
            @before-leave="getContentHeight"
            @enter="enter"
            @leave="leave"
    >
      <div class="collapse-content" v-show="open" ref="content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
  import findParent from '../mixins/findParent'
  /*
  t: current time（当前时间）；
  b: beginning value（初始值）；
  c: change in value（变化量）；
  d: duration（持续时间）。
*/
  const TWEEN = {
	linear: (t, b, c, d) => c * t / d + b,
	easeIn: (t, b, c, d) => c * (t /= d) * t + b,
	easeOut: (t, b, c, d) => -c * (t /= d) * (t - 2) + b,
	easeInOut: (t, b, c, d) => ((t /= d / 2) < 1) ? (c / 2 * t * t + b) : (-c / 2 * ((--t) * (t - 2) - 1) + b),
  };

  function scaleTo(el, {start, end, duration = 300} = opt, callback) {
	let startTime = Date.now();
	let c = end - start;
	const step = () => {
	  let now = Date.now();
	  if (startTime + duration < now) {
		callback && callback();
		return
	  }
	  let height = TWEEN.easeOut(now - startTime, start, c, duration);
	  el.style.height = height + 'px';
	  requestAnimationFrame(step)
	};
	step();
  }

  export default {
	name: 'collapse-item',
	components: {},
	mixins: [findParent],
	props: {
	  value: {
		type: [String, Number],
	  },
	  title: String,
	  radio: Boolean,
	},
	data() {
	  return {
		height: 0,
	  }
	},
	created() {
	  let parentName = `${this.$package.prefixName}-collapse`;
	  this.findParent(parentName);
	},
	methods: {
	  enter(el, done) {
		this.getContentHeight();
		scaleTo(el, {
		  start: 0,
		  end: this.height,
		}, done);
	  },
	  leave(el, done) {
		scaleTo(el, {
		  start: this.height,
		  end: 0,
		}, done);
	  },
	  getContentHeight(el) {
		if (this.inited) return;
		this.inited = true;
		this.height = this.$refs.content.clientHeight;
	  },
	  toggle() {
		this.parent.pickItem(this.value)
	  },
	},
	computed: {
	  groupValue() {
		return this.parent.value
	  },
	  open() {
		if (Array.isArray(this.groupValue)) {
		  return this.groupValue.includes(this.value)
		}
		return this.groupValue === this.value
	  },
	  rightIcon() {
		return {
		  transform: this.open ? 'rotate(-90deg)' : 'rotate(90deg)',
		  transition: '.3s',
		}
	  },
	},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .collapse-content {
    overflow: hidden;
  }
</style>
