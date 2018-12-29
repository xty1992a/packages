<template>
  <transition name="pop">
    <div class="date-picker" v-show="visibility">
      <div class="date-modal" @click="cancel" @touchmove.prevent></div>
      <div class="date-action" @touchmove.stop>
        <header>
          <span @click="monthOffset--" style="padding:8px 15px;"><</span>
          <span @click="monthShow=!monthShow">{{displayDAYJS.format('YYYY年MM月')}}</span>
          <span @click="monthOffset++" style="padding:8px 15px;">></span>
        </header>
        <transition-group tag="section" name="toggle">
          <month-picker key="month" @input="pickMonth" :value="pickedMonth" v-if="monthShow"/>
          <date-panel key="date" @input="pickDate" v-bind="dateProps" v-if="!monthShow"/>
        </transition-group>
      </div>
    </div>
  </transition>
</template>

<script>
  import dayjs from 'dayjs'
  import MonthPicker from './MonthPicker.vue'
  import DatePanel from './DatePanel.vue'
  import {getDateList} from './DateList'

  export default {
	name: 'date-picker',
	components: {MonthPicker, DatePanel},
	data () {
	  return {
		visibility: false,
		check: d => true,
		displayDAYJS: dayjs(),// 当前展示的月份
		value: '',
		monthShow: false,
		monthOffset: 0,
		pickedMonth: '',
	  }
	},
	created() {
	  this.displayDAYJS = this.valueDAYJS.clone()
	  this.pickedMonth = this.displayDAYJS.format('YYYY-MM')
	},
	methods: {
	  pickDate(date) {
		this.promise && this.promise.resolve(date.date)
		this.close()
	  },

	  pickMonth(value) {
		this.pickedMonth = value
		let [year, month] = value.split('-')
		let date = this.valueDAYJS.date()
		this.displayDAYJS = dayjs(new Date(year, month - 1, date))
	  },

	  cancel() {
		this.promise && this.promise.reject()
		this.close()
	  },
	  close() {
		this.visibility = false
		setTimeout(() => {
		  this.$destroy(true)
		}, 320)
	  }
	},
	computed: {
	  // 初始值
	  valueDAYJS() {
		return this.value ? dayjs(this.value) : dayjs()
	  },

	  dateList() {
		let {years, months} = this.displayDAYJS.toObject()
		return getDateList(years, months, this.check)
	  },
	  dateProps() {
		return {
		  isSame: (a, b) => a.fmt === b.format('YYYY-MM-DD'),
		  value: this.valueDAYJS,
		  options: this.dateList
		}
	  }
	},
	watch: {
	  monthOffset(now) {
		this.displayDAYJS = this.valueDAYJS.add(now, 'month')
		this.pickedMonth = this.displayDAYJS.format('YYYY-MM')
	  }
	},
	destroyed() {
	  this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
	}
  }
</script>

<style lang="less" rel="stylesheet/less">

  .date-picker {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    .date-modal {
      opacity: .4;
      background-color: #000;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;
    }
    .date-action {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #fff;
      text-align: center;
      header {
        font-size: 15px;
        span {
          display: inline-block;
          padding: 8px;
          &:active {
            box-shadow: 0 0 10px rgba(0, 0, 180, 0.1) inset;
          }
        }
      }
      section {
        overflow: hidden;
        position: relative;
      }
    }
  }

  .pop-enter, .pop-leave-to {
    .date-modal {
      opacity: 0;
    }
    .date-action {
      transform: translateY(100%);
    }
  }

  .pop-enter-active, .pop-leave-active {
    transition: .3s;
    .date-modal, .date-action {
      transition: .3s;
    }
  }

  .toggle-enter, .toggle-leave-to {
    position: absolute;
    width: 100%;
    transform: translateY(-100%);
  }

  .toggle-enter-active, .toggle-leave-active {
    transition: .3s;
  }
</style>
