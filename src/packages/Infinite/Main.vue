<template>
  <div class="ui-infinite"
       @touchstart="start"
       @touchmove="move"
       @touchend="end"
       :style="wrapStyle">
    <div class="ui-infinite-fresh" v-if="onRefresh">
      <p>{{freshText}}</p>
    </div>
    <slot></slot>
    <div class="ui-infinite-low">
      <template v-if="!isOver">
        <p>加载中...</p>
      </template>
      <template v-else>
        <p>{{loadText}}</p>
      </template>
    </div>
  </div>
</template>

<script>
  const getComputedStyle = document.defaultView.getComputedStyle.bind(document.defaultView);
  const getScrollParent = (element, rootParent = window) => {
	let node = element;
	while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== rootParent) {
	  const {overflowY} = getComputedStyle(node);
	  if (overflowY === 'scroll' || overflowY === 'auto') {
		return node;
	  }
	  node = node.parentNode;
	}
	return rootParent;
  };
  let timeStamp = Date.now();

  export default {
	name: 'infinite',
	components: {},
	props: {
	  onInfinite: {
		type: Function,
		default: () => {
		},
	  },
	  onRefresh: {
		type: Function,
		default: undefined,
	  },
	  loadText: {
		type: String,
		default: '再拉也没有啦',
	  },
	  offset: {
		type: Number,
		default: 100,
	  },
	},
	data() {
	  return {
		isOver: false,
		loading: false,
		overThreshold: false,
		touch: {
		  start: 0,
		  now: 0,
		},
	  }
	},
	mounted() {
	  this.scrollElement = getScrollParent(this.$el);
	  this.wrapHeight = this.scrollElement.clientHeight;
	  this.scrollHandler = this.scroll.bind(this);
	  this.scrollElement.addEventListener('scroll', this.scrollHandler);
	  this.loadOver(false);
	},
	methods: {
	  scroll() {
		this.checkScrollEnd();
		if (this.loading || this.isOver) return;
		let now = Date.now();
		if (now - timeStamp < 50) return;
		timeStamp = now;
		let reachBottom = this.getReachBottom();
		if (reachBottom) {
		  this.reachBottomHandler();
		}
	  },
	  checkScrollEnd() {
		clearTimeout(this.timeID);
		this.timeID = setTimeout(() => {
		  this.$emit('scrollEnd', this.scrollElement.scrollTop);
		}, 50)
	  },
	  getReachBottom() {
		return this.scrollElement.scrollTop > this.scrollElement.scrollHeight - this.scrollElement.clientHeight - Math.max(this.offset, 100);
	  },
	  reachBottomHandler() {
		this.loading = true;
		this.onInfinite(this.loadOver.bind(this));
	  },
	  loadOver(isOver) {
		this.loading = false;
		this.isOver = isOver;
		// 页面渲染需要时间,此时立即检查是否触底,极大可能是true
		setTimeout(() => {
		  let reachBottom = this.getReachBottom();
		  if (reachBottom && !isOver) {
			this.reachBottomHandler();
		  }
		}, 50)
	  },
	  start(e) {
		if (!this.onRefresh) return;
		let point = e.touches ? e.touches[0] : e;
		this.touch.start = point.pageY;
	  },
	  move(e) {
		if (!this.onRefresh) return;
		let point = e.touches ? e.touches[0] : e;
		let now = point.pageY - this.touch.start;
		if (now < 0) return;
		if (this.scrollElement.scrollTop) return;
		e.preventDefault();
		console.log('down & top');
		this.touch.now = now;
		this.overThreshold = this.touch.now * this.ratio > 50;
	  },
	  end() {
		if (!this.onRefresh) return;
		this.touch.start = 0;
		this.touch.now = 0;
		if (this.overThreshold) {
		  this.overThreshold = false;
		  // this.loading = true
		  this.onRefresh();
		  this.reachBottomHandler();
		}
	  },
	  moveTo(y) {
		console.log('move to', y);
		this.scrollElement.scrollTop = y;
	  },
	},
	computed: {
	  wrapStyle() {
		let offset = this.touch.now * this.ratio || 0;
		return {
		  transform: `translate3d(0,${offset}px,0)`,
		}
	  },
	  ratio() {
		return 1 - ((this.touch.now || 1) / this.wrapHeight) / 2;
	  },
	  freshText() {
		return this.overThreshold ? '松开刷新' : '下拉刷新';
	  },
	},
	destroyed() {
	  this.scrollElement.removeEventListener('scroll', this.scrollHandler);
	},
  }
</script>

<style lang="less" rel="stylesheet/less">

  .ui-infinite {
    position: relative;

    .ui-infinite-fresh {
      position: absolute;
      top: -40px;
      left: 0;
      text-align: center;
      right: 0;
      height: 40px;
    }

    .ui-infinite-low {
      text-align: center;
      padding: 10px;
    }
  }
</style>
