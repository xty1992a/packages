<template>
  <div class="date-panel" key="date">
    <ul class="week-list list">
      <li class="week item" v-for="s in weeks" :key="s">{{s}}</li>
    </ul>
    <ul class="date-list list">
      <li class="date item" v-for="e in prev" :key="e"></li>
      <li
              v-for="date in options"
              class="date item"
              :style="itemStyle"
              :class="getCLS(date)"
              :key="date.fmt"
              @click="pickDate(date)"
      >{{date.date.date()}}
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
	name: 'date-panel',
	props: {
	  options: {
		type: Array,
		required: true,
	  },
	  value: {
		type: null,
		required: true,
	  },
	  isSame: {
		type: Function,
		default: (a, b) => a === b
	  }
	},
	data () {
	  return {
		weeks: ['日', '一', '二', '三', '四', '五', '六'],
	  }
	},
	methods: {
	  pickDate(date) {
		if (date.usable) {
		  this.$emit('input', date)
		}
	  },
	  getCLS(date) {
		if (!date.usable) return 'disabled'
		return this.isSame(date, this.value) ? 'checked' : ''
	  },
	},
	computed: {
	  prev() {
		return this.options[0].date.day()
	  },
	  row() {
		return Math.ceil((this.options.length + this.prev) / 7)
	  },
	  itemStyle() {
		let height = 260 / Math.max(this.row, 5)
		return {
		  height: height + 'px',
		  lineHeight: height + 'px',
		}
	  }

	}
  }
</script>

<style lang="less" rel="stylesheet/less">

  .date-panel {
    .list {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 14.286%;
      }
    }
    .week-list {
      padding: 10px 0;
      background-color: #f0f0f0;
      .item {
        font-size: 12px;
        &:first-child, &:last-child {
          color: #ff6400;
        }
      }
    }
    .date-list {
      height: 260px;
      .item {
        border-radius: 4px;
        font-size: 14px;
        &.disabled {
          color: #999;
        }
        &.checked {
          color: #FFF;
          background-color: #3c97ff;
        }
      }
    }
  }
</style>
